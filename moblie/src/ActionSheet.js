import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ActionSheet from 'react-native-custom-actionsheet'
 
const CANCEL_INDEX = 0
const DESTRUCTIVE_INDEX = 4
const options = [ 'Cancel', 'create folder','create lession' ]
const title = 'Which one do you like?'
 
class Example extends React.Component {
  state = {
    selected: '',
  }
 
  showActionSheet = () => this.actionSheet.show()
 
  getActionSheetRef = ref => (this.actionSheet = ref)
 
  handlePress = (index) => this.setState({ selected: index })
 
  render() {
    return (
      <View>
        <Text onPress={this.showActionSheet}>
          Default ActionSheet
        </Text>
        <ActionSheet
          ref={this.getActionSheetRef}
          title={title}
          message="chon hoc phan "
          options={options}
          cancelButtonIndex={CANCEL_INDEX}
          destructiveButtonIndex={DESTRUCTIVE_INDEX}
        />
      </View>
    )
  }
}
export default Example