describe('expected behavior for videomgr', function () {

    it('should have jquery ($) defined', function () {
        expect($).toBeDefined();
    });

    it('should be able to create an instance of the jquery plugin $("<video>").videomgr()', function () {
        var videomgr = $('<video>').videomgr();
        expect(videomgr).toBeDefined();
    });

    var videomgr = $('<video>').videomgr();

    it('should be able to tell us the current play pos()', function () {
        expect(videomgr.pos()).toBeDefined();
        expect(videomgr.pos()).toEqual(0);
    });

    it('should be able to load up a real video', function () {
        var videoUrl = 'http://cactusx.com:3000/videos/movie1.ogv';
        expect(videomgr.load()).toBeDefined();
        videomgr.load(videoUrl);

        expect($.inArray(videoUrl, videomgr.videos));
    });

    it('should be able to play pause and stop a video', function () {
        expect(videomgr.play()).toBeDefined();
        expect(videomgr.pause()).toBeDefined();
        expect(videomgr.play()).toBeDefined();
        expect(videomgr.stop()).toBeDefined();
    });

    it('should be able to report back every second', function () {

        videomgr.play();

        videomgr.onPlayInterval('s', function (pos) {
            expect(videomgr.pos()).toEqual(pos);
        });

    });

});