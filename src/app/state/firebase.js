import firebase from "firebase";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};


class FirebaseWrapper {
    constructor() {
        firebase.initializeApp(firebaseConfig);
        this.db=firebase.database();
    }

    getRef(ref){
        let req=this.db.ref(ref);
        return req;
    }

    AddData(ref,data){
        this.db.ref(ref).set(data);
    }

    DeleteData(ref){
        this.db.ref(ref).remove();
    }
}

export default new FirebaseWrapper();