import { Alert, View } from "react-native";
import { Fragment, useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Button } from "@components/Button";
import { ChoiceButton } from "@components/ChoiceButton";

import { Container, DateTimeInput, Form, Header, IconGoBack, Input, InputContainer, InputLabel, SaveDateTimeButton, Title, TitleButton } from "./styles";

import { DateType } from "react-native-ui-datepicker";

import dayjs from "dayjs";
import { updateMeal } from "@storage/meal/updateMeal";
import { DatePickerModal } from "@screens/NewMeal/styles";

type RouteParams = {
  mealName: string;
  mealDescription: string;
  createdAt: DateType;
  dietStatus: 'ON_DIET' | 'OFF_DIET'
}

export function EditMeal() {
  const navigation = useNavigation()
  const route = useRoute()
  const { 
    mealName,
    mealDescription,
    createdAt
  } = route.params as RouteParams

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newMealName, setNewMealName] = useState("")
  const [date, setDate] = useState<DateType>(dayjs())
  const [newMealDescription, setNewMealDescription] = useState("")
  const [mealStatus, setMealStatus] = useState<'ON_DIET' | 'OFF_DIET'>("ON_DIET")

  async function handleSaveMeal() {
    try {
      const mealUpdated = {
        name: newMealName === "" ? mealName : newMealName,
        description: newMealDescription === "" ? mealDescription : newMealDescription,
        dietStatus: mealStatus,
        createdAt: dayjs(date).format('DD.MM.YYYY'),
        hour: dayjs(date).format('HH:mm')
      }

      const oldMealDate = createdAt

      if(mealUpdated.createdAt !== oldMealDate) {
        Alert.alert("Data incorreta", `A data precisa ser a mesma que foi informada quando a refeição foi cadastrada (${oldMealDate})`)
        return
      }

      await updateMeal(oldMealDate, mealDescription, mealUpdated)
      Alert.alert("Sucesso", "Refeição atualizada com êxito!")
      navigation.navigate('home')

    } catch (error) {
      throw error
    }
  }

  function handleChangeDietStatus(status: 'ON_DIET' | 'OFF_DIET') {
    setMealStatus(status)
  }

  return(
    <Fragment>
      <Header>
        <IconGoBack onPress={() => navigation.goBack()}/>

        <Title>Editar refeição</Title>
      </Header>

      <Container>
        <Form>
          <InputContainer>
            <InputLabel>Nome</InputLabel>
            <Input 
              defaultValue={mealName}
              onChangeText={setNewMealName}
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
              onChangeText={setNewMealDescription}
              defaultValue={mealDescription}
              placeholder="Descrição da refeição"
              returnKeyType="next"
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
                style={{
                  backgroundColor: mealStatus === 'ON_DIET' ? "#E5F0DB" : "#EFF0F0",
                  borderColor: mealStatus === 'ON_DIET' ? "#CBE4B4" : "#EFF0F0"
                }}
              />
              <ChoiceButton 
                title="Não" 
                variant="SECONDARY"
                onPress={() => handleChangeDietStatus("OFF_DIET")}
                style={{
                  backgroundColor: mealStatus === 'OFF_DIET' ? "#F4E6E7" : "#EFF0F0",
                  borderColor: mealStatus === 'OFF_DIET' ? "#F3BABD" : "#EFF0F0"
                }}
              />
            </View>
          </InputContainer>

          <Button 
            title="Salvar alterações"
            style={{ marginTop: 10 }}
            onPress={handleSaveMeal}
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