import { DateType } from "react-native-ui-datepicker";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      newMeal: undefined;
      mealFeedback: {
        mealStatus: string
      };
      meal: {
        mealName: string;
        mealDescription: string;
        createdAt: DateType;
        dietStatus: 'ON_DIET' | 'OFF_DIET'
      };
      editMeal: undefined; // por enquanto undfined
    }
  }
}