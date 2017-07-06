"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 10, name: 'Iron Man' },
            { id: 11, name: 'Hulk' },
            { id: 12, name: 'Black Widow' },
            { id: 13, name: 'War Machine' },
            { id: 14, name: 'Thor' },
            { id: 15, name: 'Hawkeye' },
            { id: 16, name: 'Captain America' },
            { id: 17, name: 'Winter Soldier' },
            { id: 18, name: 'Falcon' },
            { id: 19, name: 'Scarlet Witch' },
            { id: 20, name: 'Vision' }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map