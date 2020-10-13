import React,{Component} from 'react';
import {View, Text, Image, Button, StyleSheet, ScrollView, TouchableOpacity, Alert} from 'react-native';

export default class MainComponent extends Component{
    render(){

        // XML 컴포넌트를 변수에 대입하는 것이 가능하다
        let aaa= <Text style={styles.title}>Nice</Text>;
        const bbb=<View style={{margin:10}}>
                    <Text>Hello RN</Text>
                    <Button title="button"></Button>
                </View>;

        const arr=[bbb,bbb,bbb];
        // 식별키[index]가 없기때문에 구분하여 다른작업을 할 수 없다.

        const arr2=[
            <View key='aa'><Text>aaa</Text></View>,
            <View key='bb'><Text>bbb</Text></View>,
            <View key='cc'><Text>ccc</Text></View>,
        ];// 대량의 컴포넌트를 가지고 있는 배열

        // 실제로는 대량의 데이터들을 가진 배열
        const datas=["sam", "robin","park", "kim","sam", "robin","park", "kim","sam", "robin","park", "kim","sam", "robin","park", "kim"];

        // const kkk=[];
        // forEach문은 함수를 사용할때 파라미터로 3가지를 보내준다. [value, index, arr]
        // datas.forEach(function(value, index){
        //     // 배열에 대량의 데이터를 사용하려면 key값을 적용해 줘야한다.
        //     // kkk[index]=<Text key={index}>{value}</Text>;// 실수할 확률이 너무 많음
        //     // return <Text key={index}>{value}</Text>;// forEach는 리턴을 허용하지 않는다. 그래서 map을 사용한다.
        // });
        // 보여주고자 하는 대량의 데이터를 가지고 
        // 포이치문으로 뷰의 배열을 가지고 있을
        // kkk에게 뷰에 대량의 데이터를 넣어서 리턴해준다.


        const kkk=datas.map(function(value, index){
            return <Text key={index}>{value}</Text>;
        });

        return(
            <View style={styles.root}>
                <Text style={styles.title}>List Layout Test</Text>
                
                {/* {this.showItemView('sam', 'red')} */}
                {/* 함수를 호출하면 함수를 실행시킨 값 */}
                {/* {this.showItemView('robin','green')}
                {this.showItemView('kim', 'indigo')} */}
                {/* 배열로 컴포넌트들을 열거하려면 */}
                {/* 각 컴포넌트를 구별하기 위해  */}
                {/* 컴포넌트의 key라는 프로퍼티가 있어야한다. */}
                {/* {arr2} */}

{/* ############################################################################################### */}

                {/* {kkk} */}
                {/* kkk에 대입하여 출력 */}
                {/* {datas.map(function(value, index){return <Text key={index}>{value}</Text>;})} */}
                {/* kkk에 대입하지 않고 식을 바로출력함 */}

{/* ############################################################################################### */}

                {/* 대량의 문자열 데이터를 보여주기위한 Text컴포넌트를 */}
                {/* 데이터의 개수만큼 자동으로 만들기 */}

                <ScrollView>
                    {/* 스크롤뷰를 사용하여 스크롤이 가능하게 변경! */}
                    {datas.map((value,index, array)=>{
                        return (
                            // 눌러졌을때 바로 함수를 실행하지 않고 함수의 선언문을 실행하고 함수의 선언문은 파라미터를 갖고 함수를 실행한다.
                            <TouchableOpacity onPress={()=>{this.clickBtn(value,index);}} key={index} style={styles.itemView}>
                                <Text>{value}</Text>
                            </TouchableOpacity>  
                        );
                    })}
                </ScrollView>
                

                
            </View>
        );// return.....

    }// render mathod.....

    // XML컴포넌크를 리턴해주는 메소드
    showItemView(name, color){
        return <View style={{margin:16}}>
            <Text>{name}</Text>            
            <Button title='press' color={color}></Button>
        </View>
    };

    // 아이템 클릭 콜백함수
    clickBtn=(v,i)=>{
        Alert.alert(i+":"+v);
    }

}// MainComponent class...

const styles=StyleSheet.create({
    root:{
        backgroundColor:'#22662233',
        flex:1,
        padding:16,
    },
    title:{
        fontSize:24,
        fontWeight:"bold",
    },
    itemView:{
        padding:16,
        margin:8,
        borderWidth:1,
        borderColor:'green',
        borderRadius:8,
    }
})