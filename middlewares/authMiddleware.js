export const protect = (req, res, next) => {
  // Just a dummy middleware for now
  console.log("Middleware triggered");
  next();
};
