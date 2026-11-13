import hashlib, pathlib, sys, zipfile, json
path=pathlib.Path(sys.argv[1])
assert path.is_file(), "VSIX missing"
with zipfile.ZipFile(path) as z:
    assert z.testzip() is None
    names=set(z.namelist())
    pkg=json.loads(z.read("extension/package.json"))
    assert pkg["name"]=="armotusitio-theme" and pkg["preview"] is True
    assert len(pkg["contributes"]["themes"])==4
    assert "extension/assets/ats-glyph.svg" in names
    for t in pkg["contributes"]["themes"]:
        assert "extension/"+t["path"].removeprefix("./") in names
    assert not any("/node_modules/" in item for item in names)
digest=hashlib.sha256(path.read_bytes()).hexdigest()
checksum=path.with_suffix(path.suffix+".sha256")
checksum.write_text(digest+"  "+path.name+"\n")
print(path, "OK", digest)
