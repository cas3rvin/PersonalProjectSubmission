const childrenController = require("../controllers/children.controller");

module.exports = (app) => {
    app.post("/api/children", childrenController.createNewChildren);
    app.get("/api/children", childrenController.getAllChildren);
    app.get("/api/children/:id", childrenController.getChildren);
    app.get("/api/children/:id", childrenController.getOneChildren);
    app.put("/api/children/:id", childrenController.updateChildren);
    app.delete("/api/children/:id", childrenController.deleteExistingUser);
};