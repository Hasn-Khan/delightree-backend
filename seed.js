// seed.js
require('dotenv').config()
const mongoose = require('mongoose');
const User = require('./Models/User');
const Post = require('./Models/Post');
const Comment = require('./Models/Comment');
const Like = require('./Models/Likes');
const Follower = require('./Models/Follower');
const Tag = require('./Models/Tag');
const PostTag = require('./Models/PostTag');
const View = require('./Models/Views');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.log(err));

// Seed data
async function seedDatabase() {
    try {

        const users = await User.insertMany([
            { username: 'john_doe', email: 'john@example.com', age: 30 },
            { username: 'jane_doe', email: 'jane@example.com', age: 25 },
            { username: 'sam_smith', email: 'sam@example.com', age: 28 }
        ]);

        // Insert Posts
        const posts = await Post.insertMany([
            { title: 'First Post', content: 'This is the first post content', authorId: users[0]._id },
            { title: 'Second Post', content: 'This is the second post content', authorId: users[1]._id },
        ]);

        // Insert Comments
        await Comment.insertMany([
            { text: 'Great post!', postId: posts[0]._id, userId: users[2]._id },
            { text: 'Thanks for the info.', postId: posts[1]._id, userId: users[0]._id }
        ]);

        // Insert Likes
        await Like.insertMany([
            { postId: posts[0]._id, userId: users[1]._id },
            { postId: posts[1]._id, userId: users[2]._id }
        ]);

        // Insert Followers
        await Follower.insertMany([
            { followerId: users[1]._id, followeeId: users[0]._id },
            { followerId: users[2]._id, followeeId: users[1]._id }
        ]);

        // Insert Tags
        const tags = await Tag.insertMany([
            { name: 'Tech' },
            { name: 'Lifestyle' }
        ]);

        // Insert PostTags
        await PostTag.insertMany([
            { postId: posts[0]._id, tagId: tags[0]._id },
            { postId: posts[1]._id, tagId: tags[1]._id }
        ]);

        // Insert Views
        await View.insertMany([
            { postId: posts[0]._id, userId: users[1]._id },
            { postId: posts[1]._id, userId: users[2]._id }
        ]);

        console.log('Database seeded successfully');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        mongoose.disconnect();
    }
}

seedDatabase();
