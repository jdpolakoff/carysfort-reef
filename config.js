var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoiamRwb2xha29mZiIsImEiOiJja2R0NTVxbjQxZDhqMzFsajdla3g4bzlyIn0.WtXgT1DsBp5D_a5zV9WY0g',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    title: 'Carysfort Reef',
    subtitle: 'The Decline of an Iconic Florida Keys Coral Reef',
    footer: 'Keep Scrolling To Read Story',
    // byline: 'By a Digital Storyteller',
    chapters: [
        {
            id: 'slug-style-id',
            // title: 'Display Title',
            image: 'coral-reef-state-park.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
              center: [-80.36689, 25.18232],
zoom: 10.47,
pitch: 45.00,
bearing: 0.00
            },
            onChapterEnter: [
            //      {
            //          layer: 'layer-name',
            //          opacity: 1
            //      }
            ],
            onChapterExit: [
                 // {
                 //     layer: 'layer-name',
                 //     opacity: 0
                 // }
            ]
        },
        {
            id: 'other-identifier',
            // title: 'Second Title',
            image: 'https://www.lighthousefriends.com/carysfort2.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
              center: [-80.211310, 25.222045],
              zoom: 11.00,
pitch: 45.00,
bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
