<template>
  <div>
    <button v-if="!isLoggedIn" class="icon-button hover-effect" @click="login">
      <FontAwesomeIcon icon="fa-solid fa-arrow-right-to-bracket" />
    </button>
    <button v-else class="icon-button hover-effect" @click="logout">
      <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" />
    </button>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "@firebase/auth";
import { db } from "../firebase";
import { doc, getDoc } from "@firebase/firestore";

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      buttonLabel: "login",
      user: null,
      token: null,
      isLoggedIn: false,
    };
  },
  methods: {
    login() {
      signInWithPopup(auth, new GoogleAuthProvider())
        .then((userCredential) => {
          const credential =
            GoogleAuthProvider.credentialFromResult(userCredential);
          this.token = credential.accessToken;
          this.user = userCredential.user;
        })
        .catch((err) => {
          console.log(err.message);
          alert(err.message);
        });
    },
    logout() {
      if (confirm("Are you sure you want to logout?")) {
        this.authLogout();
      }
    },
    async authLogout() {
      try {
        await auth.signOut();
        this.isLoggedIn = false;
        this.user = null;
        this.token = null;
        console.log("logged out successfully");
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  watch: {
    user(newUser) {
      if (newUser && newUser.email !== "xmliszt@gmail.com") {
        this.authLogout()
          .then(() => {
            alert("You are not recognised as the owner of this page.");
            this.isLoggedIn = false;
          })
          .catch((err) => {
            console.log(err.message);
          });
      } else if (newUser) {
        this.isLoggedIn = true;
        if (newUser) {
          getDoc(doc(db, "v2", newUser.uid))
            .then((doc) => {
              if (!doc.exists) {
                console.log("No such document!");
              } else {
                console.log("Document data:", doc.data());
              }
            })
            .catch((error) => {
              console.log("Error getting document:", error);
            });
        }
      }
    },
  },
};
</script>
