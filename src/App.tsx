import { useState } from 'react';
import WheelNameInput from './components/WheelNameInput';
import { WheelNameAddFunction, WheelNameDeleteFunction, WheelNameType, WheelNameUpdateFunction } from './types/wheel-name';
import { Button, Card } from 'flowbite-react';
import './App.scss';

function App() {

  const [wheelNames, setWheelNames] = useState<Array<WheelNameType>>(["green", "red"]);

  const wheelNameAdd: WheelNameAddFunction = () => {
    setWheelNames([...wheelNames, ""]);
  }
  const wheelNameUpdate: WheelNameUpdateFunction = (value: WheelNameType, index: number) => {
    const updatedWheelNames = [...wheelNames];
    updatedWheelNames[index] = value;
    setWheelNames(updatedWheelNames);
  }
  const wheelNameDelete: WheelNameDeleteFunction = (index: number) => {
    wheelNames.splice(index, 1)
    setWheelNames([...wheelNames]);
  }

  return (
    <div className="h-screen w-screen px-40 overflow-hidden flex items-center gap-4">
      <Card className="">
        <WheelNameInput
          wheelNames={wheelNames}
          onWheelNameAdd={wheelNameAdd}
          onWheelNameUpdate={wheelNameUpdate}
          onWheelNameDelete={wheelNameDelete}
        />
      </Card>
      <div className='flex-grow flex justify-center'>
        <div className='color-wheel'>
          {
            wheelNames.map((name, index) => {
              return (
                <div className='segment' style={
                  {
                    backgroundColor: name,
                    transform: `rotate(${index === 0 ? 45 : 215}deg)`
                  }
                }>

                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
