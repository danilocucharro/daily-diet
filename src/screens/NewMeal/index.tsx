import { Alert, View } from "react-native";
import { Fragment, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Button } from "@components/Button";
import { ChoiceButton } from "@components/ChoiceButton";

import { Container, DatePickerModal, DateTimeInput, Form, Header, IconGoBack, Input, InputContainer, InputLabel, SaveDateTimeButton, Title, TitleButton } from "./styles";
import { DateType } from "react-native-ui-datepicker";
import dayjs from "dayjs";
import { addMeal } from "@storage/meal/addMeal";
import { addSequence } from "@storage/sequence/addSequence";
import { stopSequence } from "@storage/sequence/stopSequence";

export function NewMeal() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newMealName, setNewMealName] = useState("")
  const [newMealDescription, setNewMealDescription] = useState("")
  const [mealStatus, setMealStatus] = useState<'ON_DIET' | 'OFF_DIET'>("ON_DIET")
  const [date, setDate] = useState<DateType>(dayjs())
  const navigation = useNavigation()

  async function handleAddNewMeal() {
    const newMeal = {
      name: newMealName,
      description: newMealDescription,
      dietStatus: mealStatus,
      createdAt: date
    }

    try {
      await addMeal(newMeal)
      
      if(newMeal.dietStatus === 'ON_DIET') {
        await addSequence()
      }
      else {
        await stopSequence()
      }

      navigation.navigate('mealFeedback', { mealStatus })
    } catch (error) {
      Alert.alert("Nova refeição", "Nao foi possivel cadastrar a refeição")
    }
  }

  function handleChangeDietStatus(status: 'ON_DIET' | 'OFF_DIET') {
    setMealStatus(status)
  }
  
  return(
    <Fragment>
      <Header>
        <IconGoBack onPress={() => navigation.navigate('home')}/>

        <Title>Nova refeição</Title>
      </Header>

      <Container>
        <Form>
          <InputContainer>
            <InputLabel>Nome</InputLabel>
            <Input 
              onChangeText={setNewMealName}
              value={newMealName}
              placeholder="Nome da refeição"
              returnKeyType="next"
              autoCorrect={false}
            />
          </InputContainer>

          <InputContainer>
            <InputLabel>Descrição</InputLabel>
            <Input 
              editable
              multiline
              numberOfLines={4}
              placeholder="Descrição da refeição"
              returnKeyType="next"
              onChangeText={setNewMealDescription}
              value={newMealDescription}
              autoCorrect={false}
            />
          </InputContainer>

          <InputContainer style={{ zIndex: 1 }}>
            <InputLabel>Data e Hora</InputLabel>
            <Input 
              onPress={() => setIsModalOpen(!isModalOpen)}
              value={date?.toString()}
              showSoftInputOnFocus={false}
            />
          </InputContainer>

          <InputContainer>
            <InputLabel>Está dentro da dieta?</InputLabel>

            <View style={{ flexDirection: "row", gap: 20 }}>
              <ChoiceButton 
                title="Sim" 
                variant="PRIMARY"
                onPress={() => handleChangeDietStatus("ON_DIET")}
              />
              <ChoiceButton 
                title="Não" 
                variant="SECONDARY"
                onPress={() => handleChangeDietStatus("OFF_DIET")}
              />
            </View>
          </InputContainer>

          <Button 
            title="Cadastrar refeição"
            style={{ marginTop: 10 }}
            onPress={handleAddNewMeal}
          />
        </Form>
      </Container>

      {isModalOpen && (
        <DatePickerModal>
          <DateTimeInput
            mode="single"
            date={date}
            onChange={(params) => setDate(params.date)}
            timePicker
          />
          <SaveDateTimeButton onPress={() => setIsModalOpen(!isModalOpen)}>
            <TitleButton>Salvar</TitleButton>
          </SaveDateTimeButton>
        </DatePickerModal>
      )}
    </Fragment>
  )
}