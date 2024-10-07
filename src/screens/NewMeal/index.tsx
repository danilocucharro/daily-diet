import { TouchableOpacity, View, Text } from "react-native";
import { Fragment, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Button } from "@components/Button";
import { ChoiceButton } from "@components/ChoiceButton";

import { Container, DatePickerModal, DateTimeInput, Form, Header, IconGoBack, Input, InputContainer, InputLabel, SaveDateTimeButton, Title, TitleButton } from "./styles";
import { DateType } from "react-native-ui-datepicker";
import dayjs from "dayjs";

export function NewMeal() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [date, setDate] = useState<DateType>(dayjs())
  const navigation = useNavigation()

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
            <Input />
          </InputContainer>

          <InputContainer>
            <InputLabel>Descrição</InputLabel>
            <Input 
              editable
              multiline
              numberOfLines={4}
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
              <ChoiceButton title="Sim" variant="PRIMARY" />
              <ChoiceButton title="Não" variant="SECONDARY" />
            </View>
          </InputContainer>

          <Button 
            title="Cadastrar refeição"
            style={{ marginTop: 10 }}
            onPress={() => navigation.navigate('mealFeedback')}
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