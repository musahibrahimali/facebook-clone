import React, { useEffect, useState } from 'react';
import MessageSender from './MessageSender/MessageSender';
import Post from './Post/Post';
import StoryReel from './StoryReel/StoryReel';
import database from '../../Config/firebase';
import './Feed.css';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        database.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(
                snapshot.docs.map(
                    doc => ({ id: doc.id, data: doc.data() })
                )
            )
        })
    }, [])

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {
                posts.map(
                    post => (
                        <Post
                            key={post.data.id}
                            profilePic={post.data.profilePic}
                            message={post.data.message}
                            timestamp={post.data.timestamp}
                            username={post.data.username}
                            image={post.data.image}
                        />
                    )
                )
            }
        </div>
    );
}

export default Feed;
