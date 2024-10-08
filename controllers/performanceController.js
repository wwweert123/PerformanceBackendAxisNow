const Visit = require("../model/Visit");

const makeVisitRecord = (object) => {
    const Record = {
        DNS: object.domainLookupEnd - object.domainLookupStart,
        TCP: object.connectEnd - object.connectStart,
        Request: object.responseStart - object.requestStart,
        Response: object.responseEnd - object.responseStart,
        Processing: object.domComplete - object.domContentLoadedEventStart,
        LoadEvent: object.loadEventEnd - object.loadEventStart,
        TotalTime: object.duration,
    };
    console.log(Record);
    return Record;
};

const createVisit = async (req, res) => {
    console.log(req?.body);
    try {
        const result = await Visit.create(makeVisitRecord(req.body));
        res.status(201).json(result);
        console.log(result);
    } catch (err) {
        res.status(400).json(err);
    }
};

module.exports = { createVisit };
