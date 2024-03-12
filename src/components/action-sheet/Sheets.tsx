import {registerSheet} from 'react-native-actions-sheet';
import ActionSheet from './ActionSheet.tsx';

registerSheet('action-sheet', ActionSheet);

// We extend some of the types here to give us great intellisense
// across the app for all registered sheets.
declare module 'react-native-actions-sheet' {
  interface Sheets {
    'action-sheet': SheetDefinition;
  }
}

export {};
