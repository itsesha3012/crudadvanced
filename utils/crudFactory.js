// Generic CRUD factory to avoid repetition
export const crudControllers = (Model) => ({
  createOne: async (req, res, next) => {
    try {
      const doc = await Model.create(req.body);
      res.status(201).json(doc);
    } catch (err) {
      next(err);
    }
  },

  getAll: async (req, res, next) => {
    try {
      const docs = await Model.find();
      res.json(docs);
    } catch (err) {
      next(err);
    }
  },

  getOne: async (req, res, next) => {
    try {
      const doc = await Model.findById(req.params.id);
      if (!doc) return res.status(404).json({ message: "Not found" });
      res.json(doc);
    } catch (err) {
      next(err);
    }
  },

  updateOne: async (req, res, next) => {
    try {
      const doc = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!doc) return res.status(404).json({ message: "Not found" });
      res.json(doc);
    } catch (err) {
      next(err);
    }
  },

  deleteOne: async (req, res, next) => {
    try {
      const doc = await Model.findByIdAndDelete(req.params.id);
      if (!doc) return res.status(404).json({ message: "Not found" });
      res.json({ message: "Deleted successfully" });
    } catch (err) {
      next(err);
    }
  }
});
