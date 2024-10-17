const User = require('../Models/User');

exports.createUser = async (req, res) => {
  try {
    const { username, email, age } = req.body;
    const newUser = new User({ username, email, age });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUserStatsByAgeRange = async (req, res) => {
  try {
    const result = await User.aggregate([
      {

        $project: {
          username: 1,
          age: 1,
          ageRange: {
            $switch: {
              branches: [
                { case: { $lt: ["$age", 25] }, then: "18-24" },
                { case: { $lt: ["$age", 35] }, then: "25-34" },
                { case: { $lt: ["$age", 45] }, then: "35-44" },
              ],
              default: "45+"
            }
          }
        }
      },
      {

        $lookup: {
          from: "posts",
          localField: "_id",
          foreignField: "authorId",
          as: "posts"
        }
      },
      {
        $lookup: {
          from: "comments",
          localField: "_id",
          foreignField: "userId",
          as: "comments"
        }
      },
      {

        $lookup: {
          from: "likes",
          localField: "_id",
          foreignField: "userId",
          as: "likes"
        }
      },
      {

        $lookup: {
          from: "views",
          localField: "_id",
          foreignField: "userId",
          as: "views"
        }
      },
      {
        $group: {
          _id: "$ageRange",
          totalUsers: { $sum: 1 },
          totalPosts: { $sum: { $size: "$posts" } },
          totalComments: { $sum: { $size: "$comments" } },
          totalLikes: { $sum: { $size: "$likes" } },
          totalViews: { $sum: { $size: "$views" } }
        }
      },
    ]);



    res.status(200).json(result);
  } catch (error) {
    console.error('Error aggregating user stats:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
