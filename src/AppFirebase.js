import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./todoapp.css";
import TodoApp from "./components/TodoAppFirebase";
import firebase from "./firebase";

function App() {


    const [task, setTask] = useState("");
    const [tasklist, setTaskList] = useState([]);
    const [idOfUpdate, setIdOfUpdate] = useState(null);
    const [truth, setTruth] = useState();
  
    useEffect(() => {
      populate();
    }, []);
  
    useEffect(() => {
      let id = idOfUpdate;
      if (id !== null) {
        markCompleteGlobal();
      }
    }, [truth]);
  
    const markCompleteGlobal = () => {
  
    
    
        let id = idOfUpdate;
      const itemtoupdate = firebase
        .firestore()
        .collection("t")
        .doc(id);
  
      itemtoupdate.update({
        completed: truth,
      });
    // debugger
      setIdOfUpdate(null);
      setTruth(null);
    };
  
    // Toggle Complete
    const taskCompleted = (id) => {
      console.log("First", idOfUpdate);
      setIdOfUpdate(id);
  
      setTask(
        task.map((t) => {
          if (t.id === id) {
            t.completed = !t.completed;
  
            setTimeout(function() {
              setTruth(t.completed);
            }, 1000);
          }
          return t;
        })
      )
      console.log("Second", idOfUpdate, truth);
    };
  
    // Delete Todo
    const deletetask = (id) => {
      const db = firebase.firestore();
      db.collection("t")
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!", id);
        })
        .catch((error) => {
          console.error(id, "Error removing document: ", error);
        })
        .then((res) => setTask([...task.filter((t) => t.id !== id)]));
      console.log(id, "here is an id", id);
    };
  
    // Add Todo
    const AddTask = (task) => {
      const datas = {
        id: firebase
          .firestore()
          .collection("t")
          .doc().id,
      };
      const db = firebase.firestore();
      db.collection("t")
        .doc(datas.id)
        .set({ title: title, completed: false, id: datas.id })
        .then(() => {
          populate();
        });
    };
  
    const populate = (data) => {
      setTodos([]);
      return firebase
        .firestore()
        .collection("t")
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            let newData = doc.data();
  
            if (todos.indexOf(newData.id) === -1) {
              setTodos((arr) => {
                return [...arr, newData];
              });
            } else {
              console.log("this is a duplicate");
            }
            console.log("here are all of the todos", task);
          });
        })
        .catch((e) => console.log(e));
    };  







    return (
      <div className="App">
        <span className="title">Burger App</span> <br />
        <span className="title1">Burger Eaten</span> <br />
        <TodoApp />
        
      </div>
    );
  }
  
  export default App;