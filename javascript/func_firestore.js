function firebaseSetUp() {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();

    return db;
}

async function getClientCredentials() {
    var docRef = db.collection('credentials').doc('client_secret');
    var data = await docRef.get().then(function (doc) {
        if (doc.exists) {
            return doc.data();
        }
    }).catch(function (error) {
        console.log('Could not get client secret info')
            return getClientSecret();
    })
    return data.value;
}


function codeGenerator() {
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    var code = '';

    for (var i = 0; i < 4; i++) {
        var random = Math.floor(Math.random() * letters.length);
        code += letters[random];
    }

    return code;
}

async function roomCreate() {
    var roomCode = codeGenerator();
    var doesRoomExist = await roomInfo(db, roomCode);
    //associate room code with data in database
    if(doesRoomExist == null) {
        const data = {
            queue : [],
            vote: [],
            participants : [],
            songIndex: [],
            timestamp: null,
            roomCode: roomCode
        }
        await db.collection("rooms").doc(roomCode).set(data);
    }
    joinRoom(db, roomCode);
    //display room code
    return roomCode;
}

async function spotifyLogin() {

}

//need to decide what parameters top
async function getRoomInfo(db, roomCode) {
    var docRef = db.collection('rooms').doc(roomCode);
    var data = await docRef.get().then(function (doc) {
        if (doc.exists) {
            return doc.data();
        }
    }).catch(function (error) {
        console.log('Could not get room info');
        console.log(error);
        return null;
    })
    return data;
}



async function addSongFirebase(db, roomCode, userToken, accessToken, uri){
    var data = await getRoomInfo(db, roomCode);
    var numSongs = data.queue.length;
    await db.collection('rooms').doc(roomCode).update({
        queue: firebase.firestore.FieldValue.arrayUnion(uri)
    });
    if(numSongs == 1) {
        //TODO: Start song
        await db.collection('rooms').doc(roomCode).update({
            timestamp : new Date()
        })
        startPlayMusic(accessToken, db, roomCode);
    }

}

async function updateParameters(db, roomCode, songLength) {
    var data = await getRoomInf
}

async function startPlayMusic(accessToken, db, roomCode) {
    var roomData = await getRoomInfo(db, roomCode);
    var begTime = roomData.timestamp;
    var curTime = new Date();
    var difInTime = Math.abs((curTime.getTime() / 1000) - begTime.seconds());
    difInTime = Math.round(difInTime) * 1000;
    async playSongSpotify(); //from spotify file
    //addToQueue() in spotify file
    for(var i = data.songIndex + 1; i < data.Queue.length; i++) {
        addToQueue(accessToken, data.Queue[i]);
    }
    updateParameters(db, roomCode, songLength);
}

async function joinRoom(db, roomCode) {
    //code to join a room
    //spotify authentication, return access token
    var clientSecret = await getClientCredentials(); //for firebase google auth
    var spotifyAccessCode; //from spotify config file
    var spotifyAccessToken; //from spotify config file
    var userid; //function from spotify config to get userId from access token
    

    
    
    
}



