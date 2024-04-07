export const environment = {
    production: false
};

export const SpotifyConfiguration = {
    clientId: '2851a4d41da749429fb7881bbfc83f67',
    authEndpoint: 'https://accounts.spotify.com/authorize',
    redirectUrl: 'https://localhost:4200/login/',
    scopes: [
        "user-read-currently-playing",
        "user-read-recently-played",
        "user-read-playback-state",
        "user-top-read",
        "user-modify-playback-state",
        "user-library-read",
        "playlist-read-private",
        "playlist-read-collaborative"
    ]
}