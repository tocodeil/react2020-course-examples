import { MyForm, UserDetails, SummaryPage, SelectHobbies } from './pages';
import { Page1, Page2 } from './HelloContainer';
import './main.css';

const App = () => {

  return (
    <div>
      <Page2 />
      <MyForm >
        <UserDetails />
        <SelectHobbies />
        <SummaryPage />
      </MyForm>
    </div>
  )
};

export default App
