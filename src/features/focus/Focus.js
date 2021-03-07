import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import {fontSizes, spacing} from '../../utils/Sizes'
import {colors} from "../../utils/Colors";
import {RoundedButton} from "../../components/RoundedButton";


export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null)
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}> What would you like to focus on ? </Text>
        <View style={styles.inputContainer}>
          <TextInput style={{flex:1, marginRight:spacing.md}} onSubmitEditing={({nativeEvent}) =>{
            setSubject(nativeEvent.text)}}/>
          <RoundedButton size={50} title='+' onPress={()=> addSubject(subject)}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: spacing.md,
    justifyContent: 'center',
    alignItems:'center'
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSizes.md,
  },
  inputContainer: {
    padding: spacing.md,
    flexDirection:'row',
    alignItems:'center'
  },
});