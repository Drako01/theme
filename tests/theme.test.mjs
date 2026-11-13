import test from "node:test";import assert from "node:assert/strict";import {readFileSync,existsSync} from "node:fs";import {join} from "node:path";
const root=new URL("../",import.meta.url);const pkg=JSON.parse(readFileSync(new URL("../package.json",import.meta.url)));
function rgb(hex){return [1,3,5].map(i=>{const v=parseInt(hex.slice(i,i+2),16)/255;return v<=0.04045?v/12.92:((v+0.055)/1.055)**2.4;});}
function luminance(hex){const [r,g,b]=rgb(hex);return 0.2126*r+0.7152*g+0.0722*b;}
function contrast(a,b){const x=luminance(a),y=luminance(b);return (Math.max(x,y)+0.05)/(Math.min(x,y)+0.05);}
test("manifest: four non-activating selectable themes",()=>{assert.equal(pkg.preview,true);assert.equal(pkg.publisher,"armotusitio");assert.equal(pkg.main,undefined);assert.equal(pkg.activationEvents,undefined);assert.equal(pkg.contributes.themes.length,4);});
for(const entry of pkg.contributes.themes){
 test("theme "+entry.label,()=>{
 const t=JSON.parse(readFileSync(new URL("../"+entry.path,import.meta.url)));
 assert.equal(t.semanticHighlighting,true);assert.equal(t.type,entry.uiTheme==="vs"?"light":entry.uiTheme==="vs-dark"?"dark":entry.uiTheme);
 assert.ok(Object.keys(t.colors).length>=90);assert.ok(t.tokenColors.length>=12);
 const ideSharedTokens=["button.secondaryHoverBackground","inputValidation.warningBackground","inputValidation.errorBackground","testing.iconPassed","testing.iconFailed","testing.iconQueued","textCodeBlock.background","textBlockQuote.background","toolbar.hoverBackground"];
 for(const key of ideSharedTokens){assert.match(t.colors[key],/^#[0-9A-Fa-f]{6}([0-9A-Fa-f]{2})?$/,entry.label+" missing "+key);}
 assert.ok(t.semanticTokenColors["function"] && t.semanticTokenColors["class"]);
 for(const id of ["editor.background","editor.foreground","sideBar.background","sideBar.foreground","input.background","input.foreground","tab.activeBackground","tab.activeForeground","terminal.background","terminal.foreground","statusBar.background","statusBar.foreground"]){assert.match(t.colors[id],/^#[0-9A-Fa-f]{6}$/);}
 for(const [fg,bg] of [["editor.foreground","editor.background"],["sideBar.foreground","sideBar.background"],["input.foreground","input.background"],["terminal.foreground","terminal.background"],["tab.activeForeground","tab.activeBackground"],["statusBar.foreground","statusBar.background"]]){
 const ratio=contrast(t.colors[fg],t.colors[bg]);const min=entry.uiTheme.startsWith("hc")?7:4.5;
 assert.ok(ratio>=min,entry.label+": "+fg+" / "+bg+" "+ratio.toFixed(2)+" < "+min);
 }
 for(const tok of t.tokenColors){assert.ok(tok.settings.foreground);const c=contrast(tok.settings.foreground,t.colors["editor.background"]);assert.ok(c>=4.5,entry.label+" "+tok.name+" syntax contrast "+c.toFixed(2));}
 });
}

// Only the delivery policy changed for 0.1.1; keep a focused regression gate.
test("release uses a validated PR artifact for version-bump auto-publishing", () => {
  const publish=readFileSync(new URL("../.github/workflows/publish.yml",import.meta.url),"utf8");
  const ci=readFileSync(new URL("../.github/workflows/ci.yml",import.meta.url),"utf8");
  assert.match(pkg.scripts.package,new RegExp("armotusitio-theme-"+pkg.version.replaceAll(".","\\.")+"\\.vsix"));
  assert.match(ci,new RegExp("armotusitio-theme-"+pkg.version.replaceAll(".","\\.")+"\\.vsix"));
  assert.match(publish,/push:\s*\n\s*branches:\s*\[main\]/);
  assert.match(publish,/gh run download/);
  assert.match(publish,/sha256sum -c/);
  assert.match(publish,/pull_request/);
  assert.match(publish,/head_sha/);
  assert.match(publish,/main_tree/);
  assert.match(publish,/--oidc/);
  assert.match(publish,/--trusted-publishing/);
  assert.doesNotMatch(publish,/npm run check|node --test/);
});
