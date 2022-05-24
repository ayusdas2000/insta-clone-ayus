import React, { useEffect, useState } from 'react'
import Post from './Post'
import { db } from '../firebase'
import { onSnapshot, query, orderBy, collection } from 'firebase/firestore'

function Posts() {
  const [posts, setPosts] = useState([])
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'posts'),orderBy("timestamp","desc")),
        (snapshot) => {
          setPosts(snapshot.docs)
        }
      ),
    [db]
  )
  // useEffect(() => {
  //   const colRef = collection(db, 'posts')
  //   const q = query(colRef,orderBy('timeStamp','desc'))
  //   onSnapshot(q,(snapshot)=>{
  //     setPosts(snapshot.docs)
  //   })
  // }, [db])
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  )
}

export default Posts
