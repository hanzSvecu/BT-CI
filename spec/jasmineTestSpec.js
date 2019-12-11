xdescribe("jasmineTest", function(){
    it("sample test to pass", function() {
        expect("1").toEqual("1");
    });
    it("sample test to fail", function() {
        expect("1").toEqual("2");
    });
});