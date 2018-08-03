import { Notifications } from 'expo'
import { AsyncStorage } from 'react-native'

const NOTIFICATION_KEY = 'mobileFlashcards:notifications'

function createNotification() { // tworzy przypominajke o stalej tresci
  return {
    title: 'Make some quizes!',
    body: "Train a bit today...noobie! :D",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  }
}

export function clearLocalNotification() { // czysci wszystkie przypominajki
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync())
}

//WAZNE: Przypominajki MUSZA byc polaczone z localStorage, bo inaczej po kazdym wylaczeniu apki musielibysmy ustawiac wszystko od nowa (bez sensu)
//a tak, to ustawiamy, ze np. zgadzamy sie na przypominajki i problem z glowy - aplikacja "bedzie pamietac"
export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY) //pobiera zawartosc tego, co jest przypisane do klucza (tu: mobileFlashcards:notifications)
    .then(JSON.parse)
    .then((data) => {
      console.log(data)
        Notifications.cancelAllScheduledNotificationsAsync() // najpierw czysci wszystkie przypominajki (zeby wrzucic nowa)

        let tomorrow = new Date() // ustawienie daty i czasu przypominajki
        tomorrow.setDate(tomorrow.getDate() + 1)
        tomorrow.setHours(10)
        tomorrow.setMinutes(0)

        Notifications.scheduleLocalNotificationAsync( // wrzucenie do schedulara naszej nowej przypominajki
          createNotification(), // tu wywolanie tworzenia przypominajki (funkcja wyzej)
          {
            time: tomorrow, // o jakim czasie ma wyskakiwac przypominajka
            repeat: 'day' // jak czesto ma sie powtarzac
          }
        )

        AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
    })
}



