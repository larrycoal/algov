import React from 'react';
import styles from "./linkedlist.module.css";

const Usecase = () => {
    return (
      <div className={styles.descriptionWrapper}>
        <section>
          <h2>Music Playlist:</h2>
          <p>
            A music playlist can be effectively implemented using a linked list
            data structure. Each node in the linked list represents a song, and
            the pointers/references connect the songs in the order they are
            meant to be played. Let's break down how a linked list can be used
            for this purpose:
          </p>
        </section>
        <section>
          <h2>Node Structure:</h2>
          <p>
            Each node in the linked list represents a song in the playlist and
            contains two main components:
          </p>
          <span>
            Each node in a linked list contains two main components:
            <br />
            <b>Data:</b>The song's metadata, including the song title, artist,
            duration, and possibly other information. holds.
            <br />
            <b>Pointer/Reference:</b>This points to the next song in the
            playlist.
          </span>
        </section>
      </div>
    );
};

export default Usecase;