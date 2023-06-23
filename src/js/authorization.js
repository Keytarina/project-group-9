// // =========================== authorization-window section ===========================
// const refs = {
//   buttonSwitch: document.querySelector('#toggle-button'),
//   headerNav: document.querySelector('#header-nav'),
//   authorizationWindowInput: document.querySelectorAll(
//     '.authorization-window-input'
//   ),
//   authorizationWindowSubmitButton: document.querySelector(
//     '.authorization-window-submit-button'
//   ),
//   authorizationWindowForm: document.querySelector('.authorization-window-form'),
//   openAuthorizationBtn: document.querySelector('[data-authorization-open]'),
//   closeAuthorizationBtn: document.querySelector('[data-authorization-close]'),
//   authorization: document.querySelector('[data-authorization]'),
//   signUpButton: document.querySelector('.sign-up'),
//   signInButton: document.querySelector('.sign-in'),
//   btnLogin: document.querySelector('.btn-login'),
//   btnSigned: document.querySelector('.btn-signed'),
//   btnLoginTextSigned: document.querySelector('.btn-login-text-signed'),
//   btnLogout: document.querySelector('.btn-logout'),
//   authorizationWindow: document.querySelector('.authorization-window'),
//   authorizationWindowCloseButtonIcon: document.querySelector(
//     '.authorization-window-close-button-icon'
//   ),
//   authorizationWindowIcon: document.querySelectorAll(
//     '.authorization-window-icon'
//   ),
//   headerList: document.querySelector('.header-list'),
//   }; // масив посилань

// refs.buttonSwitch.addEventListener('click', () => {
//   refs.body.classList.toggle('dark');
//   refs.headerImgLight.classList.toggle('visually-hidden');
//   refs.headerImgDark.classList.toggle('visually-hidden');
//   refs.header.classList.toggle('dark');
// });

// let user = ''; // uid користувача

// // - - - - - - - - - - - - - - - зміна теми вікна авторизації - - - - - - - - - - - - - - -
// if (localStorage.theme === 'dark') {
//   refs.authorizationWindow.classList.add('dark');
//   refs.authorizationWindowInput.forEach(el => {
//     el.classList.add('dark');
//   });
//   refs.authorizationWindowCloseButtonIcon.classList.add('dark');
//   refs.authorizationWindowIcon.forEach(el => {
//     el.classList.add('dark');
//   });
//   refs.authorizationWindowSubmitButton.classList.add('dark');
//   refs.signUpButton.classList.add('dark');
//   refs.signInButton.classList.add('dark');
// } // зміна теми вікна авторизації на темну при старті

// refs.buttonSwitch.addEventListener('click', () => {
//   refs.authorizationWindow.classList.toggle('dark');
//   refs.authorizationWindowInput.forEach(el => {
//     el.classList.toggle('dark');
//   });
//   refs.authorizationWindowCloseButtonIcon.classList.toggle('dark');
//   refs.authorizationWindowIcon.forEach(el => {
//     el.classList.toggle('dark');
//   });
//   refs.authorizationWindowSubmitButton.classList.toggle('dark');
//   refs.signUpButton.classList.toggle('dark');
//   refs.signInButton.classList.toggle('dark');
// }); // зміна теми вікна авторизаці при натисканні на кнопку
// // - - - - - - - - - - - - - - - /зміна теми вікна авторизації - - - - - - - - - - - - - - -

// // - - - - - - - - - - - - - - - модальне вікно авторизації - - - - - - - - - - - - - - -
// (() => {
//   refs.openAuthorizationBtn.addEventListener('click', toggleAuthorization);
//   refs.closeAuthorizationBtn.addEventListener('click', toggleAuthorization);

//   function toggleAuthorization() {
//     const isAuthorizationOpen =
//       refs.openAuthorizationBtn.getAttribute('aria-expanded') === 'true' ||
//       false;
//     refs.openAuthorizationBtn.setAttribute(
//       'aria-expanded',
//       !isAuthorizationOpen
//     );
//     refs.authorization.classList.toggle('is-hidden');

//     const scrollLockMethod = !isAuthorizationOpen
//       ? (document.body.style.overflow = 'hidden')
//       : (document.body.style.overflow = 'scroll');
//     // bodyScrollLock[scrollLockMethod](document.body);
//   }
// })(); // відкриття/закриття вікна авторизації та блокування скролу
// // - - - - - - - - - - - - - - - /модальне вікно авторизації - - - - - - - - - - - - - - -

// // - - - - - - - - - - - - -  - - функції авторизації - - - - - - - - - - - - - - -
// import { Notify } from 'notiflix/build/notiflix-notify-aio'; // імпорт бібліотеки notiflix
// import { initializeApp } from 'firebase/app'; // імпорт функції "initializeApp"
// import { getAuth } from 'firebase/auth'; // імпорт функції "getAuth"
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; // імпорт функції "createUserWithEmailAndPassword"
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // імпорт функції "signInWithEmailAndPassword"

// const firebaseConfig = {
//   apiKey: 'AIzaSyAb7qX9rlncTGJ67DqxnbFRQ3lMV1rBMms',
//   authDomain: 'js-firebase-auth-cb2eb.firebaseapp.com',
//   projectId: 'js-firebase-auth-cb2eb',
//   storageBucket: 'js-firebase-auth-cb2eb.appspot.com',
//   messagingSenderId: '233176764690',
//   appId: '1:233176764690:web:5fcced0357c9421e88e3cb',
// }; // параметри конфігурації firebase з аккаунту Google

// const app = initializeApp(firebaseConfig); // ініціалізація застосунку арр з аккаунту Google Firebase

// refs.signUpButton.addEventListener('click', () => {
//   refs.authorizationWindowSubmitButton.textContent = 'sign up';
//   refs.signUpButton.classList.add('curr');
//   refs.signInButton.classList.remove('curr');
// }); // слухач події натискання на кнопку "sign up"

// refs.signInButton.addEventListener('click', () => {
//   refs.authorizationWindowSubmitButton.textContent = 'sign in';
//   refs.signUpButton.classList.remove('curr');
//   refs.signInButton.classList.add('curr');
// }); // слухач події натискання на кнопку "sign in"

// const auth = getAuth(app); // повертаємо в змінну "auth" екземпляр Auth, пов’язаний із наданим @firebase застосунком

// refs.authorizationWindowForm.addEventListener('submit', e => {
//   e.preventDefault(); // блокування дій браузера за замовчуванням
//   if (
//     refs.authorizationWindowSubmitButton.textContent.trim().toLowerCase() ===
//     'sign up'
//   ) {
//     signUpWithEmailPassword();
//   } else {
//     onSignIn();
//   }
// }); // слухач "submit"у форми авторизації

// function signUpWithEmailPassword() {
//   const name = `${refs.authorizationWindowForm.elements.name.value}`;
//   const email = `${refs.authorizationWindowForm.elements.email.value}`;
//   const password = `${refs.authorizationWindowForm.elements.password.value}`;

//   // [START auth_signup_password]
//   try {
//     createUserWithEmailAndPassword(auth, email, password)
//       .then(userCredential => {
//         // Signed in
//         user = userCredential.user; // авторизований користувач
//         console.log(user.uid);
//         userID = user.uid;
//         refs.btnLogin.classList.add('visually-hidden'); // приховати кнопку "Sign up"
//         refs.btnSigned.classList.remove('visually-hidden'); // показати кнопку "User"
//         refs.btnLoginTextSigned.textContent = name; // записати в кнопку "User" і'мя користувача
//         refs.authorization.classList.toggle('is-hidden'); // приховати вікно авторизації
//         refs.authorizationWindowForm.reset(); // очистити форму
//         Notify.success(
//           `User ${name} with email address ${email} successfully created!`
//         ); // повідомлення про успішну операцію авторизації
//         writeUserName(name); // запис імені користувача до бази даних
//         // ...
//       })
//       .catch(error => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode);
//         console.log(errorMessage);

//         if (errorCode === 'auth/wrong-password') {
//           Notify.failure(`Wrong password.`); // повідомлення про невірний пароль
//         } else if (errorCode === 'auth/email-already-in-use') {
//           Notify.failure(`User with this email ${email} already in use.`); // повідомлення про невірний пароль
//         } else {
//           Notify.failure(`${errorMessage}`); // повідомлення з текстом помилки
//         }
//         console.log(error);
//         // ..
//       });
//   } catch (error) {
//     console.log(error);
//     Notify.failure(`User ${name} with email address ${email} failed created!`);
//   } // повідомлення про помилку створення користувача
// }

// function onSignIn() {
//   const name = `${refs.authorizationWindowForm.elements.name.value}`;
//   const email = `${refs.authorizationWindowForm.elements.email.value}`;
//   const password = `${refs.authorizationWindowForm.elements.password.value}`;
//   if (email.length < 4) {
//     Notify.failure(
//       `User email address is wrong! Please enter an email address.`
//     ); // повідомлення про невірну електронну адресу
//     return;
//   }
//   if (password.length < 4) {
//     Notify.failure(`User password is wrong! Please enter a password.`);
//     return;
//   } // повідомлення про невірний пароль

//   try {
//     // Sign in with email and pass.
//     signInWithEmailAndPassword(auth, email, password)
//       .then(userCredential => {
//         // Signed in
//         user = userCredential.user; // авторизований користувач
//         // console.log(user.uid);
//         userID = user.uid;
//         refs.btnLogin.classList.add('visually-hidden'); // приховати кнопку "Sign up"
//         refs.btnSigned.classList.remove('visually-hidden'); // показати кнопку "User"
//         // refs.btnLoginTextSigned.textContent = name; // записати в кнопку "User" і'мя користувача
//         refs.authorization.classList.toggle('is-hidden'); // приховати вікно авторизації
//         refs.authorizationWindowForm.reset(); // очистити форму
//         Notify.success(
//           `User ${name} with email address ${email} successfully SIGNED!`
//         ); // повідомлення про успішну операцію авторизації

//         reedNameUserDB()
//           .then(response => {
//             refs.btnLoginTextSigned.textContent = response; // записати і'мя користувача з бази даних в кнопку користувача
//           })
//           .catch(error => {
//             console.log(error.message);
//           }); // функція читання імені користувача з бази даних при авторизації
//       })
//       .catch(error => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // console.log(errorCode);
//         console.log(errorMessage);
//         if (errorCode === 'auth/wrong-password') {
//           Notify.failure(`Wrong password!`); // повідомлення про невірний пароль
//         } else {
//           Notify.failure(`${errorMessage}`); // повідомлення з текстом помилки
//         }
//         console.log(error);
//         // ..
//       });
//   } catch (error) {
//     console.log(error);
//     Notify.failure(`User ${name} with email address ${email} failed SIGNED!`);
//   } // повідомлення про помилку авторизації
// }

// refs.btnLogout.addEventListener('click', onSignOut); // слухач події Log out

// refs.btnSigned.addEventListener('click', () => {
//   refs.btnLogout.classList.toggle('visually-hidden'); // показати кнопку "Log out"
// }); // слухач події натискання кнопки "User" для показу кнопку "Log out"

// function onSignOut() {
//   try {
//     auth
//       .signOut()
//       .then(() => {
//         refs.btnLogin.classList.remove('visually-hidden'); // показати кнопку "Sign up"
//         refs.btnSigned.classList.add('visually-hidden'); // приховати кнопку з імям авторизованого користувача
//         refs.btnLogout.classList.add('visually-hidden'); // приховати кнопку "Log out"
//         Notify.success(
//           `User ${refs.btnLoginTextSigned.textContent} with email address ${email} successfully SIGNED OUT!`
//         ); // повідомлення про успішну операцію
//       })
//       .catch(error => {
//         console.log(error);
//         Notify.failure(
//           `User ${refs.btnLoginTextSigned.textContent} with email address ${email} failed SIGNED OUT!`
//         ); // повідомлення про не успішну операцію
//       });
//   } catch (error) {
//     console.log(error);
//     Notify.failure(
//       `User ${refs.btnLoginTextSigned.textContent} with email address ${email} failed SIGNED OUT!`
//     ); // повідомлення про не успішну операцію
//   }
// }

// window.addEventListener('beforeunload', () => {
//   try {
//     auth
//       .signOut()
//       .then(responce => {
//         // console.log(responce);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   } catch (error) {
//     console.log(error);
//   }
// }); // автоматичний log out користувача при закритті сторінки браузера

// function initApp() {
//   // Listening for auth state changes.
//   auth.onAuthStateChanged(function (user) {
//     if (user) {
//       // User is signed in.
//       refs.headerNav.classList.remove('visually-hidden'); // показати кнопки "Home" та "ShoppingList"
//       // console.log('User is signed in.');
//     } else {
//       // User is signed out.
//       refs.headerNav.classList.add('visually-hidden'); // приховати кнопки "Home" та "ShoppingList"
//       // console.log('User is signed out.');
//     } // якщо слухач авторизований то повідомлення "Користувач авторизований" та показати кнопки, інакше повідомлення "Користувач не авторизований" та приховати кнопки
//   });
// } // ініціалізація застосунку. Додається слухач, який відслідковує зміну ствну авторизації користувача

// window.addEventListener('load', () => {
//   initApp();
// }); // при завершенні завантаження всіх елементів "window" запускається функція ініціалізації застосунку
// // - - - - - - - - -  - - - - - - /функції авторизації - - - - - - - - - - - - - - -

// // - - - - - - - - -  - - - - - - функції роботи з БД - - - - - - - - - - - - - - -
// import { doc, getFirestore, setDoc, getDoc } from 'firebase/firestore';
// import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';

// const firestore = getFirestore(app);

// async function addBookID(id) {
//   console.log(`${user.uid}`);
//   await updateDoc(doc(firestore, 'books', `${user.uid}`), {
//     id_book: arrayUnion(id),
//   }).catch(error => {
//     console.log(error.message);
//   });
// } // функція додавання ID-книжки до бази даних (потребує id книги яку необхідно записати в БД)

// async function dellBookID(id) {
//   await updateDoc(doc(firestore, 'books', `${user.uid}`), {
//     id_book: arrayRemove(id),
//   }).catch(error => {
//     console.log(error.message);
//   });
// } // функція видалення ID-книжки з бази даних (потребує id книги яку необхідно видалити з БД)

// async function reedBookID() {
//   const mySnapshot = await getDoc(doc(firestore, 'books', `${user.uid}`));
//   // console.log(`${user.uid}`);
//   if (mySnapshot.exists()) {
//     const docData = mySnapshot.data();
//     const idBook = docData.id_book; // масив id книжок з бази даних
//     console.log(docData);
//     refs.reedDb.textContent = idBook; // видалити - - - - - - - - - - - - - - - - - - - - -
//     return idBook;
//   } else {
//     // docSnap.data() will be undefined in this case
//     console.log('No such document!');
//   } // якщо запис поточний користувач зареєстрований в базі, беремо дані за його "uid"
// }

// async function writeUserName(nameUser) {
//   try {
//     await setDoc(doc(firestore, 'books', `${user.uid}`), {
//       name: nameUser,
//     })
//       .then(() => {
//         // console.log("This value has been written to the database.");
//       })
//       .catch(error => {
//         console.log(`I got an error! ${error}`);
//       });
//   } catch (error) {
//     console.log(`I got an error! ${error}`);
//   }
// } // при створенні користувача робимо запис його "uid" та імені в БД

// async function reedNameUserDB() {
//   const mySnapshot = await getDoc(doc(firestore, 'books', `${user.uid}`));
//   if (mySnapshot.exists()) {
//     return mySnapshot.data().name;
//   } else {
//     console.log('No such document!');
//   }
// } // якщо запис поточний користувач зареєстрований в базі, беремо його і'мя з БД за його "uid"

// export { addBookID, dellBookID, reedBookID }; // експорт в зовнішній код
// export let userID; // експорт в зовнішній код

// // - - - - - - - - -  - - - - - - /функції роботи з БД - - - - - - - - - - - - - - -
// // =========================== /authorization-window section ===========================
