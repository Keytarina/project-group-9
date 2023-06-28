// // =========================== authorization-window section ===========================
const refs = {
  buttonSwitch: document.querySelector('#toggle-button'),
  headerNav: document.querySelector('#header-nav'),
  authorizationWindowInput: document.querySelectorAll(
    '.authorization-window-input'
  ),
  authorizationWindowSubmitButton: document.querySelector(
    '.authorization-window-submit-button'
  ),
  authorizationWindowForm: document.querySelector('.authorization-window-form'),
  openAuthorizationBtn: document.querySelector('[data-authorization-open]'),
  closeAuthorizationBtn: document.querySelector('[data-authorization-close]'),
  authorization: document.querySelector('[data-authorization]'),
  signUpButton: document.querySelector('.sign-up'),
  signInButton: document.querySelector('.sign-in'),
  btnLogin: document.querySelector('.btn-login'),
  btnSigned: document.querySelector('.btn-signed'),
  btnLogout: document.querySelector('.btn-logout'),
  authorizationWindow: document.querySelector('.authorization-window'),
  authorizationWindowCloseButtonIcon: document.querySelector(
    '.authorization-window-close-button-icon'
  ),
  authorizationWindowIcon: document.querySelectorAll(
    '.authorization-window-icon'
  ),
  headerList: document.querySelector('.header-list'),
  inputName: document.querySelector('#name'),
  btnClientImg: document.querySelector('.btn-client-img'),
  btnClientCaret: document.querySelector('.btn-client-caret'),
}; // масив посилань

function replaceNameUserButton(refElem) {
  const indexElOne = refElem.innerHTML.indexOf('>') + 1;
  const partOne = refElem.innerHTML.slice(0, indexElOne);
  const temp = refElem.innerHTML.slice(indexElOne, refElem.innerHTML.length);
  const indexElTwo = temp.indexOf('<');
  const partTwo = temp.slice(indexElTwo, temp.length);
  return partOne + `${localStorage.getItem('user-name')}` + partTwo;
} // функція replaceNameUserButton повертає html розмітку кнопки авторизованого користувача з заміною ім'я на ім'я з локальної бази

if (localStorage.getItem('user-id') !== '') {
  refs.btnSigned.innerHTML = replaceNameUserButton(refs.btnSigned); // записати в кнопку "User" і'мя користувача
  refs.btnLogin.classList.add('visually-hidden'); // приховати кнопку "Sign up"
  refs.btnSigned.classList.remove('visually-hidden'); // показати кнопку "User"
  refs.headerNav.classList.remove('visually-hidden'); // показати кнопки "Home" та "ShoppingList"
}
let userID = ''; // uid користувача

// // - - - - - - - - - - - - - - - зміна теми вікна авторизації - - - - - - - - - - - - - - -
if (localStorage.theme === 'dark') {
  refs.authorizationWindow.classList.add('dark');
  refs.authorizationWindowInput.forEach(el => {
    el.classList.add('dark');
  });
  refs.authorizationWindowCloseButtonIcon.classList.add('dark');
  refs.authorizationWindowIcon.forEach(el => {
    el.classList.add('dark');
  });
  refs.authorizationWindowSubmitButton.classList.add('dark');
  refs.signUpButton.classList.add('dark');
  refs.signInButton.classList.add('dark');
} // зміна теми вікна авторизації на темну при старті

refs.buttonSwitch.addEventListener('click', () => {
  refs.authorizationWindow.classList.toggle('dark');
  refs.authorizationWindowInput.forEach(el => {
    el.classList.toggle('dark');
  });
  refs.authorizationWindowCloseButtonIcon.classList.toggle('dark');
  refs.authorizationWindowIcon.forEach(el => {
    el.classList.toggle('dark');
  });
  refs.authorizationWindowSubmitButton.classList.toggle('dark');
  refs.signUpButton.classList.toggle('dark');
  refs.signInButton.classList.toggle('dark');
}); // зміна теми вікна авторизаці при натисканні на кнопку
// // - - - - - - - - - - - - - - - /зміна теми вікна авторизації - - - - - - - - - - - - - - -

// - - - - - - - - - - - - - - - модальне вікно авторизації - - - - - - - - - - - - - - -
(() => {
  refs.openAuthorizationBtn.addEventListener('click', toggleAuthorization); // слухач події 'click' кнопки відкриття вікна авторизації
  refs.closeAuthorizationBtn.addEventListener('click', toggleAuthorization); // слухач події 'click' кнопки закриття вікна авторизації

  function toggleAuthorization() {
    const isAuthorizationOpen =
      refs.openAuthorizationBtn.getAttribute('aria-expanded') === 'true' ||
      false;
    refs.openAuthorizationBtn.setAttribute(
      'aria-expanded',
      !isAuthorizationOpen
    ); // функція toggleAuthorization, змінює атрибут 'aria-expanded' кнопки відкриття вікна авторизації відповідно до стану вікна авторизації (відкрито - true, закрито - false)

    refs.authorization.classList.toggle('is-hidden'); // відкриття/закриття вікна авторизації

    if (!isAuthorizationOpen) {
      document.body.style.overflow = 'hidden'; // заблокувати скролл
    } else {
      document.body.style.overflow = 'scroll'; // розблокувати скролл
      refs.authorizationWindowForm.reset(); // очистити форму
    }
  }
})(); // відкриття/закриття вікна авторизації та блокування скролу
// // - - - - - - - - - - - - - - - /модальне вікно авторизації - - - - - - - - - - - - - - -

// // - - - - - - - - - - - - -  - - функції авторизації - - - - - - - - - - - - - - -
import { Notify } from 'notiflix/build/notiflix-notify-aio'; // імпорт бібліотеки notiflix
import { initializeApp } from 'firebase/app'; // імпорт функції "initializeApp"
import { getAuth } from 'firebase/auth'; // імпорт функції "getAuth"
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; // імпорт функції "createUserWithEmailAndPassword"
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // імпорт функції "signInWithEmailAndPassword"

const firebaseConfig = {
  apiKey: 'AIzaSyAb7qX9rlncTGJ67DqxnbFRQ3lMV1rBMms',
  authDomain: 'js-firebase-auth-cb2eb.firebaseapp.com',
  projectId: 'js-firebase-auth-cb2eb',
  storageBucket: 'js-firebase-auth-cb2eb.appspot.com',
  messagingSenderId: '233176764690',
  appId: '1:233176764690:web:5fcced0357c9421e88e3cb',
}; // параметри конфігурації firebase з аккаунту Google

const app = initializeApp(firebaseConfig); // ініціалізація застосунку арр з аккаунту Google Firebase

refs.signUpButton.addEventListener('click', () => {
  refs.authorizationWindowSubmitButton.textContent = 'sign up';
  refs.signUpButton.classList.add('curr');
  refs.signInButton.classList.remove('curr');
  refs.inputName.disabled = false;
  refs.inputName.style.display = 'block';
}); // слухач події натискання на кнопку "sign up"

refs.signInButton.addEventListener('click', () => {
  refs.authorizationWindowSubmitButton.textContent = 'sign in';
  refs.signUpButton.classList.remove('curr');
  refs.signInButton.classList.add('curr');
  refs.inputName.disabled = true;
  refs.inputName.style.display = 'none';
  refs.authorizationWindowForm.elements.name.value = '';
}); // слухач події натискання на кнопку "sign in"

const auth = getAuth(app); // повертаємо в змінну "auth" екземпляр Auth, пов’язаний із наданим @firebase застосунком

refs.authorizationWindowForm.addEventListener('submit', e => {
  e.preventDefault(); // блокування дій браузера за замовчуванням
  if (
    refs.authorizationWindowSubmitButton.textContent.trim().toLowerCase() ===
    'sign up'
  ) {
    signUpWithEmailPassword();
  } else {
    onSignIn();
  }
}); // слухач "submit"у форми авторизації

function signUpWithEmailPassword() {
  const name = `${refs.authorizationWindowForm.elements.name.value}`;
  const email = `${refs.authorizationWindowForm.elements.email.value}`;
  const password = `${refs.authorizationWindowForm.elements.password.value}`;

  // [START auth_signup_password]
  try {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user; // авторизований користувач
        // console.log(user.uid);
        userID = user.uid;
        refs.btnLogin.classList.add('visually-hidden'); // приховати кнопку "Sign up"
        refs.btnSigned.classList.remove('visually-hidden'); // показати кнопку "User"
        refs.authorization.classList.toggle('is-hidden'); // приховати вікно авторизації
        refs.authorizationWindowForm.reset(); // очистити форму
        document.body.style.overflow = 'scroll'; // зняти обмеження на скролл
        Notify.success(
          `User ${name} with email address ${email} successfully created!`
        ); // повідомлення про успішну операцію авторизації
        writeUserName(name); // запис імені користувача до бази даних
        localStorage.setItem('user-name', `${name}`); // запис імені користувача до локальної бази даних
        localStorage.setItem('user-id', `${userID}`); // запис id користувача до локальної бази даних
        refs.headerNav.classList.remove('visually-hidden'); // показати кнопки "Home" та "ShoppingList"
        refs.btnSigned.innerHTML = replaceNameUserButton(refs.btnSigned); // записати в кнопку "User" і'мя користувача
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);

        if (errorCode === 'auth/wrong-password') {
          Notify.failure(`Wrong password.`); // повідомлення про невірний пароль
        } else if (errorCode === 'auth/email-already-in-use') {
          Notify.failure(`User with this email ${email} already in use.`); // повідомлення про невірний пароль
        } else {
          Notify.failure(`${errorMessage}`); // повідомлення з текстом помилки
        }
        console.log(error);
        // ..
      });
  } catch (error) {
    console.log(error);
    Notify.failure(`User ${name} with email address ${email} failed created!`);
  } // повідомлення про помилку створення користувача
}

function onSignIn() {
  const email = `${refs.authorizationWindowForm.elements.email.value}`;
  const password = `${refs.authorizationWindowForm.elements.password.value}`;
  if (email.length < 4) {
    Notify.failure(
      `User email address is wrong! Please enter an email address.`
    ); // повідомлення про невірну електронну адресу
    return;
  }
  if (password.length < 4) {
    Notify.failure(`User password is wrong! Please enter a password.`);
    return;
  } // повідомлення про невірний пароль

  try {
    // Sign in with email and pass.
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user; // авторизований користувач
        // console.log(user);
        userID = user.uid;
        refs.btnLogin.classList.add('visually-hidden'); // приховати кнопку "Sign up"
        refs.btnSigned.classList.remove('visually-hidden'); // показати кнопку "User"
        // refs.btnSigned.textContent = name; // записати в кнопку "User" і'мя користувача
        refs.authorization.classList.toggle('is-hidden'); // приховати вікно авторизації
        document.body.style.overflow = 'scroll'; // зняти обмеження на скролл
        refs.authorizationWindowForm.reset(); // очистити форму
        Notify.success(`User with email address ${email} successfully SIGNED!`); // повідомлення про успішну операцію авторизації
        localStorage.setItem('user-id', `${userID}`); // запис id користувача до локальної бази даних
        refs.headerNav.classList.remove('visually-hidden'); // показати кнопки "Home" та "ShoppingList"

        reedNameUserDB(userID)
          .then(response => {
            // console.log(response);
            localStorage.setItem('user-name', `${response}`); // запис імені користувача до локальної бази даних
            refs.btnSigned.innerHTML = replaceNameUserButton(refs.btnSigned); // записати і'мя користувача з бази даних в кнопку користувача
          })
          .catch(error => {
            console.log(error.message);
          }); // функція читання імені користувача з бази даних при авторизації
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode);
        console.log(errorMessage);
        if (errorCode === 'auth/wrong-password') {
          Notify.failure(`Wrong password!`); // повідомлення про невірний пароль
        } else {
          Notify.failure(`${errorMessage}`); // повідомлення з текстом помилки
        }
        console.log(error);
        // ..
      });
  } catch (error) {
    console.log(error);
    Notify.failure(`User with email address ${email} failed SIGNED!`);
  } // повідомлення про помилку авторизації
}

refs.btnLogout.addEventListener('click', onSignOut); // слухач події Log out

refs.btnSigned.addEventListener('click', () => {
  refs.btnLogout.classList.toggle('visually-hidden'); // показати кнопку "Log out"
}); // слухач події натискання кнопки "User" для показу кнопку "Log out"

function onSignOut() {
  try {
    auth
      .signOut()
      .then(() => {
        refs.btnLogin.classList.remove('visually-hidden'); // показати кнопку "Sign up"
        refs.btnSigned.classList.add('visually-hidden'); // приховати кнопку з імям авторизованого користувача
        refs.btnLogout.classList.add('visually-hidden'); // приховати кнопку "Log out"
        userID = '';
        Notify.success(
          `User ${refs.btnSigned.textContent} successfully SIGNED OUT!`
        ); // повідомлення про успішну операцію

        document.location.replace('../index.html'); // Log out, по click на яку користувач виходить із особистого кабінету і переходить на головну сторінку
        refs.headerNav.classList.add('visually-hidden'); // приховати кнопки "Home" та "ShoppingList"
        localStorage.setItem('user-name', ``); // стирання імені користувача з локальної бази даних
        localStorage.setItem('user-id', ``); // стирання id користувача з локальної бази даних
      })
      .catch(error => {
        console.log(error);
        Notify.failure(
          `User ${refs.btnSigned.textContent} with email address ${email} failed SIGNED OUT!`
        ); // повідомлення про не успішну операцію
      });
  } catch (error) {
    console.log(error);
    Notify.failure(
      `User ${refs.btnSigned.textContent} with email address ${email} failed SIGNED OUT!`
    ); // повідомлення про не успішну операцію
  }
}

window.addEventListener('beforeunload', () => {
  try {
    auth
      .signOut()
      .then(responce => {
        // console.log(responce);
      })
      .catch(error => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
  // localStorage.setItem('user-name', ``); // запис імені користувача до локальної бази даних
  // localStorage.setItem('user-id', ``); // запис id користувача до локальної бази даних
}); // автоматичний log out користувача при закритті сторінки браузера

function initApp() {
  // Listening for auth state changes.
  auth.onAuthStateChanged(function (userID) {
    if (userID) {
      // User is signed in.
      // refs.headerNav.classList.remove('visually-hidden'); // показати кнопки "Home" та "ShoppingList"
      // console.log('User is signed in.');
    } else {
      // User is signed out.
      // refs.headerNav.classList.add('visually-hidden'); // приховати кнопки "Home" та "ShoppingList"
      // console.log('User is signed out.');
    } // якщо слухач авторизований то повідомлення "Користувач авторизований" та показати кнопки, інакше повідомлення "Користувач не авторизований" та приховати кнопки
  });
} // ініціалізація застосунку. Додається слухач, який відслідковує зміну ствну авторизації користувача

window.addEventListener('load', () => {
  initApp();
}); // при завершенні завантаження всіх елементів "window" запускається функція ініціалізації застосунку
// - - - - - - - - -  - - - - - - /функції авторизації - - - - - - - - - - - - - - -

// - - - - - - - - -  - - - - - - функції роботи з БД - - - - - - - - - - - - - - -
import { doc, getFirestore, setDoc, getDoc } from 'firebase/firestore';
import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';

const firestore = getFirestore(app);

async function addBookID(id, userID) {
  await updateDoc(doc(firestore, 'books', `${userID}`), {
    id_book: arrayUnion(id),
  }).catch(error => {
    console.log(error.message);
  });
} // функція додавання ID-книжки до бази даних (потребує id книги яку необхідно записати в БД та id авторизованого користувача)

async function dellBookID(id, userID) {
  await updateDoc(doc(firestore, 'books', `${userID}`), {
    id_book: arrayRemove(id),
  }).catch(error => {
    console.log(error.message);
  });
} // функція видалення ID-книжки з бази даних (потребує id книги яку необхідно видалити з БД та id авторизованого користувача))

async function reedBookID(userID) {
  const mySnapshot = await getDoc(doc(firestore, 'books', `${userID}`));
  if (mySnapshot.exists()) {
    const docData = mySnapshot.data();
    const idBook = docData.id_book; // масив id книжок з бази даних
    // console.log(docData);
    return idBook;
  } else {
    console.log('No such book!');
  } // якщо запис поточний користувач зареєстрований в базі, беремо дані за його "uid"
}

async function writeUserName(nameUser) {
  try {
    await setDoc(doc(firestore, 'books', `${userID}`), {
      name: nameUser,
    })
      .then(() => {
        // console.log("This value has been written to the database.");
      })
      .catch(error => {
        console.log(`I got an error! ${error}`);
      });
  } catch (error) {
    console.log(`I got an error! ${error}`);
  }
} // при створенні користувача робимо запис його "uid" та імені в БД

async function reedNameUserDB(userID) {
  const mySnapshot = await getDoc(doc(firestore, 'books', `${userID}`));
  if (mySnapshot.exists()) {
    return mySnapshot.data().name;
  } else {
    console.log('No such document!');
  }
} // якщо запис поточний користувач зареєстрований в базі, беремо його і'мя з БД за його "uid"

function getIDUser() {
  return userID;
} // функція повертає UID зареєстрованого користувача

export { addBookID, dellBookID, reedBookID, getIDUser }; // експорт в зовнішній код

// - - - - - - - - -  - - - - - - /функції роботи з БД - - - - - - - - - - - - - - -
// =========================== /authorization-window section ===========================
