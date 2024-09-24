import { View } from "react-native";
import { Fragment } from "react";
import { useNavigation } from "@react-navigation/native";

import { Container, Form, Header, IconGoBack, Input, InputContainer, InputLabel, TimeInput, TimeInputContainer, Title } from "./styles";
import { ChoiceButton } from "./components/ChoiceButton";
import { Button } from "@components/Button";

export function NewMeal() {
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

          <View style={{ flexDirection: "row", gap: 20 }}>
            <TimeInputContainer>
              <InputLabel>Data</InputLabel>
              <TimeInput />
            </TimeInputContainer>

            <TimeInputContainer>
              <InputLabel>Hora</InputLabel>
              <TimeInput />
            </TimeInputContainer>
          </View>

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
          />
        </Form>
      </Container>
    </Fragment>
  )
}