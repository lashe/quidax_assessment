var models = require("../../database/models/index");


const search = async (query) => {
    const searchCount = await models.Books.findAndCountAll({
        where: {
            [Op.or]: [
              {
                [Op.and]: [
                  { title: { [Op.like]: `%${query}%` } },
                ],
              },
              {
                [Op.and]: [
                  { author: { [Op.like]: `%${query}%` } },
                ],
              },
              {
                  [Op.and]: [
                    { genre: { [Op.like]: `%${query}%` } },
                  ],
                },
                {
                  [Op.and]: [
                    { tag: { [Op.like]: `%${query}%` } },
                  ],
                },
            ],
          },
    });
    const limit = 20;
    const { page } = req.query || 1; // page number
    let pages = Math.ceil(searchCount.count / limit);
    let offset = limit * (page - 1) || 0;
    const search = await models.Books.findAll({
        limit: limit,
        offset: offset,
        $sort: { id: 1 },
        where: {
          [Op.or]: [
            {
              [Op.and]: [
                { title: { [Op.like]: `%${query}%` } },
              ],
            },
            {
              [Op.and]: [
                { author: { [Op.like]: `%${query}%` } },
              ],
            },
            {
                [Op.and]: [
                  { genre: { [Op.like]: `%${query}%` } },
                ],
              },
              {
                [Op.and]: [
                  { tag: { [Op.like]: `%${query}%` } },
                ],
              },
          ],
        },
      });
      let data = {
        limit,
        page,
        pages,
        offset,
        search,

      }
      return data;
}

module.exports = {
    search
}