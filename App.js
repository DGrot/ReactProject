import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from "react-native";

//import workout from components folder
import Workout from "./components/Workout";

//default function declare constants
export default function App() {
  const [workout, setWorkout] = useState();
  const [workoutList, setWorkoutList] = useState([]);

  //when workout is added clear the text
  const handleAddWorkout = () => {
    Keyboard.dismiss();
    setWorkoutList([...workoutList, workout]);
    setWorkout(null);
  };

  //take the workout and set it to completed workout (delete)
  const completedWorkout = (index) => {
    let itemsCopy = [...workoutList];
    itemsCopy.splice(index, 1);
    setWorkoutList(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Instructions}>
        Instructions: Press the "Enter a Workout" button and enter the workout
        you are trying to accomplish. Example "10 reps of curls @ 25lbs". When
        complete just press the workout to remove it.
      </Text>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.WorkoutWrapper}>
          {/* set the page title */}
          <Text style={styles.sectionTitle}>Enter a Workout:</Text>
          <View style={styles.items}>
            {workoutList.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => completedWorkout(index)}
                >
                  {/* add the text */}
                  <Workout text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeWorkoutWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Enter a Workout:"}
          value={workout}
          onChangeText={(text) => setWorkout(text)}
        />
        <TouchableOpacity onPress={() => handleAddWorkout()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8195a1",
  },
  WorkoutWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  Instructions: {
    backgroundColor: "#000000",
    color: "#ffffff",
    paddingTop: 40,
    paddingBottom: 10,
  },

  sectionTitle: {
    fontSize: 30,
    fontWeight: "bold",
    backgroundColor: "#000738",
    color: "#ffffff",
    padding: 10,
    margin: -26,
    marginBottom: 26,
    textAlign: "center",
  },
  items: {
    marginTop: 30,
  },
  writeWorkoutWrapper: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 20,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
    borderColor: "#2e2e2e",
    borderWidth: 2,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#2e2e2e",
    borderWidth: 2,
  },
  addText: {
    fontSize: 25,
    color: "#adadad",
  },
});
