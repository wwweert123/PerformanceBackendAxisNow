const Employee = require("../model/Employee");

const createVisit = async (req, res) => {
    if (!req?.body?.firstname || !req?.body?.lastname) {
        return res
            .status(400)
            .json({ message: "First and last names are required" });
    }

    try {
        const result = await Employee.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
        });

        res.status(201).json(result);
    } catch (err) {
        console.error(err);
    }
};
