import CMSPage from "../models/CMSPage.js";

export const listPublishedPages = async (req, res, next) => {
  try {
    const pages = await CMSPage.find({ published: true }).sort({ updatedAt: -1 });
    res.json({ success: true, pages });
  } catch (error) {
    next(error);
  }
};

export const getPublishedPageBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const page = await CMSPage.findOne({ slug, published: true });
    if (!page) {
      return res.status(404).json({ success: false, message: "Page not found." });
    }
    res.json({ success: true, page });
  } catch (error) {
    next(error);
  }
};
