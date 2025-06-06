async function loadFeatured() {
    try {
        // Gather playlist array
        const response = await fetch('./data/data.json');
        if (!response.ok) {
            throw new Error('Data retrieval: bad response');
        }
        const playlists = await response.json();
        
        const pick = Math.floor(Math.random() * playlists.length);
        const pl = playlists[pick];

        const featuredTitle = document.getElementById("featuredTitle");
            featuredTitle.innerHTML = pl.playlist_name;

        const featuredAuthor = document.getElementById("featuredAuthor");
            featuredAuthor.innerHTML = `by ${pl.playlist_author}`;

        const featuredImage = document.getElementById("featuredImage");
            featuredImage.setAttribute("src", pl.playlist_art);

        let plContent = document.getElementsByClassName("playlistContent")[0];
        let i=0;
        pl.songs.forEach(song => {
            let songItem = document.createElement("article");
                songItem.id = `song${i++}`;

                // Left side of song item: cover, gen. info
                let sLeft = document.createElement("div");
                    sLeft.className = "left";

                    // Cover
                    let sCover = document.createElement("img");
                        sCover.src = song.cover;
                        sCover.alt = "song cover";
                        sLeft.appendChild(sCover);

                    // Gen. info
                    let sInfo = document.createElement("div");
                        sInfo.className = "songInfo";
                        let sTitle = document.createElement("h3");
                            sTitle.innerText = song.title
                            sInfo.appendChild(sTitle);
                        let artist = document.createElement("p");
                            artist.innerText = song.artist;
                            sInfo.appendChild(artist);
                        let album = document.createElement("p");
                            album.innerText = song.album;
                            sInfo.append(album);
                        sLeft.appendChild(sInfo);
                    songItem.appendChild(sLeft);

                // Right side of song item: runtime
                let sRight = document.createElement("div");
                    sRight.className = "right";
                    let runtime = document.createElement("p");
                        runtime.innerText = song.runtime;
                        sRight.appendChild(runtime);
                    songItem.appendChild(sRight);

            plContent.appendChild(songItem);
        });
    } catch (error) {
        console.log('toggle Modal: ', error);
    }
}
loadFeatured();