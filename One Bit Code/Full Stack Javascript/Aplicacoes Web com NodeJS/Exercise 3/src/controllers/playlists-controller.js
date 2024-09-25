const findPlaylistIndex = (id) => {
    return playlists.findIndex(playlist => playlist.id === +id);
}

const playlists = [
    { id: 1, name: 'The best rock of the 90s', tags: ['rock'], musics: [ 
        { title: 'Smells Like Teen Spirit', year: 1991, band: 'Nirvana', album: 'Nervermind' }
    ]}
]

module.exports = {

    // GET /playlists
    index: (req, res) => {
        res.json(playlists);
    },

    // GET /playlists/:id
    show: (req, res) => {
        const { id } = req.params;

        const playlist = playlists.find(playlist => playlist.id === +id);

        if(!playlist) {
            return res.status(404).json({ message: "Playlist not found!" });
        } else {
            res.json(playlist);
        }
    },

    // POST /playlist
    save: (req, res) => {
        const { name, tags, musics = [] } = req.body;

        if(typeof name !== 'string') return res.status(404).send({ message: 'You need to give a name for your playlist!'});
        if(!Array.isArray(tags)) return res.status(404).send({ message: 'You need to at least put a tag!'});

        const newPlaylist = {
            id: Math.round(Math.random() * 9999999),
            name,
            tags,
            musics
        }

        playlists.push(newPlaylist);
        
        res.status(201).json(newPlaylist);
    },

    // PUT /playlists/:id
    update: (req, res) => {
        const { id } = req.params;
        const { name, tags } = req.body;

        const playlistIndex = findPlaylistIndex(id);
        if(playlistIndex === -1) {
            return res.status(404).json({ message: "Playlist not found! "});
        }

        if(typeof name === 'string') {
            playlists[playlistIndex].name = name;
        }

        if(tags && Array.isArray(tags)) {
            playlists[playlistIndex].tags = tags;
        }
        
        res.send(playlists[playlistIndex]);
    },

    // DELETE /playlists/:id
    delete: (req, res) => {
        const { id } = req.params;
        
        const playlistIndex = playlists.findIndex(playlist => playlist.id === +id);
        if(playlistIndex === -1) {
            return res.status(404).json({ message: "Playlist not found! "});
        };

        playlists.splice(playlistIndex, 1);
        res.status(204).end();
    },

    // POST /playlists/:id/musics
    addMusic: (req, res) => {
        const { id } = req.params;
        const { title, year, band, album } = req.body;

        const playlistIndex = findPlaylistIndex(id);
        if(playlistIndex === -1) {
            return res.status(404).json({ message: "Playlist not found! "});
        }

        if(typeof title !== 'string' || typeof year !== 'number' || typeof band !== 'string' || typeof album !== 'string') {
            return res.status(400).json({ message: 'Invalid value!' });
        }

        const newMusic = {
            id: Math.round(Math.random() * 999999),
            title,
            year,
            band,
            album
        }

        playlists[playlistIndex].musics.push(newMusic);
        res.json(playlists[playlistIndex]);
    },

    // DELETE by title /playlists/:id/musics  
    removeMusic: (req, res) => {
        const { id } = req.params;
        const { title } = req.body;

        const playlistIndex = findPlaylistIndex(id);
        if(playlistIndex === -1) {
            return res.status(404).json({ message: "Playlist not found! "});
        }

        playlists[playlistIndex].musics = playlists[playlistIndex].musics.filter(music => music.title !== title);
        res.status(204).end();
    }
}