import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to APP</Text>
      <Image 
        source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA/1BMVEX///8oQFhnrFP4+/f7/PwjPFV0s2JeqEgzS2NXpT4mPldOYHLv8fMaN1EfOlMjPVUAKkhiqk3s9OlvsVwUNE8BL0xZpkEAJ0b29/gpRFtToziBjZrj5ukNMU11s2KMvn6gyZVEWGylrbXZ3eHGzNG1vMPS5cyu0aWVn6m3166DunOozZ6+2rbT2Nxseohba30AIkOKlJ96h5WVw4nG38C9w8pWZnhjc4Ph7t20yLdyhYdpjHja7tF6mYa90rpUl0k8alNjsUVttVLX4dk9ZFhTilUgNVkdLllVjVW5x8AAFTwAGT52fpKisK90uVyj0pKUr5qJt4NXbXhinV2dvZ0xSBkLAAAJL0lEQVR4nO2Za5faRhKGW4ygJdAFDUJIIAmJmy4IGG6Ds5vEjhMn2Th7zf7/37JV3QKP7eTs2Q8bdHbrGR/RajWeflXV1VU9jBEEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAE8X+Obxi+aKjIrVXfq9dh6o2XI1+gGqHxe835P2Gz1UxL255hwodeL51hn59Cy8d7YDdZYF/Yq0mXbJli43k7+6BoM3nuPe22k890351ZZNpdxbZGOWOB1e4vsXM+alsaU1OrDVjmcAc23gzbkv6CTVxs2Fakber/Jj9ccnWzWyx6TZO4GClKO3ItJVoyFdr9OfYuI8XastBWFMV123C5QJ+rKF0LGBmsB30mfEmxUunf58lmAh9q6i8m95TzK1wspf28zJ9dkDYfKspQ9Oam4s7Aaoqi5TnKeQrZxFS66RY4qCwCgfvZpX19I0xj2xA/Nwd2adhaNBW0Hvjl1mDnSLFT0bsDmy7YzFXaOzBM1FWGC+xzl/JLYV9RRipTNRsfYMeWXaQxNTYJ7yLkNwEzdIOZnN3eVKyDaIFD9oXVzAkqxDsf5Jj5+XwGSfAqul3QBU4cCT3zPbvI9Zc2TuHExbUWiAj6bKFvAgbYyBSWNGfGHB05YCHoVMwoGu0ZGldJZ3vUDAv01Wr1xR9Wf1whX2pffvX1avVwX1Ef4fdQot2HmTKYcSScbjFUrGeGVlPc/tCCxwu2QIW2bQ/PYvEqtmvaiqsZ7DTm/PUbz+HIN8E30PDKO6v6CDVvo8YoZyF47FC4GNjI3LMQAg3QtV0b1l8OowJN0wIILQFKh0fWHtw7cVqtX97ABXkbvIWr0/p2cr63sBqMe8YeTZKyOUSdoQiEF7F5oNXaphU85yj7gIsSsh8YYMBAdxbVi3AN4l5/orA8j/oNCan7CQYZsJmt+agwwle/kVKh19qpvoxCuAVGtV02YD8LXwPsmULh2++6r4VA593370Crc9yb1p0UfcousvaL+QFiSY/5ShdmPjvnVlcxYe5bC321xo/QKWfAEvOB9jMuVmHEDCQFP/wI+rjz9s0P34ERebFzD/eU9QIFwmEEsUTBbE3G1QgsaJswde2D1WA/6OO6c123P7nuImlbMQ9S4esfHYcPsoeH+B2akn/d7S/uKesDBiSlioil+MrVXtQWscXtwvzU/i1jYSKPk8AC3cldBVZitx2yjKN78vLE/KWfcOGtf4rMO6r6iPkk6A+H/VQmK2qu4Z0iNu3NT8PhT7eB+6eh5GmjKv3he3gFId5NWMFbjjddMSMPUlaKiBPP+g3KTtVws3kR9uAurEtE/2UJ+GlxeO3zWaF7ySNkfaYJPjsQ8Wb686ghTnrDD40XRc+nVe/HY2t1t/sigzSuN7JwB3kUTsqLrtaoGmo+0fr9kXWZyVn5qaYpuXw0wT1eS7cicb1oL3hRBhozbSjWb7RZeULhF08NclJYYZEp5me9lylzHtk2pptIatkIVLoGJHHyRoC7iUCdT8y+JYNQ28jEMuR/ftr8+u+6CxcMkpYJsw+EWcIh7Iq2Jpam2CFFCWzuIPU2LQsjb9uy2sPayGDAfL/tiYDc1dhUKPzLz5p/Nz2fkeNObl3222D4LDouwiCR2CYwy7FnSyyBLWO+PRwmKQhMD4fnw0sjGVKhdWEdEWj++n2DnDR8AvtsxRtfiMIJMpWuUlfF15LYgOzFki58kVuhsf1QBPq53EVvgcbJ3jcokkLRW5f1NWivmcxZxGEGlsSQgoMHIn4K5T6abzHcLkNIw8PzQVQZ8Aqg8pKBxvlb9/cX8pto3dpcNZC6mIe52W2LWAmZqf2cH2RxhYTm1Zobe+QGWiByPNQXXayRUQgbvp00JScFDLeLxxU3sOi1Qh8lGZjFtUX9BJWGXKPow215uvbgH0auJZM8y33azVlvyI4yo9Ea5KQhKnyR0eyhYNoaRiqLfQOWZBdtJA85mCiDLbmRZBUL96ltuq4ZPM8M9urx3GOxcNK/N8lJjWtJKBFnMVa/D6HRBLecQ9TRYC0qt+CPZbAsqB68cvXAjPlmDi7wcCrHCZs94DJ0Ov9o0maI5xG2JtxU3aj1TqHUob+uA6FIcuvdD932umxXY28wXVenU5GUDndaziNbwTJ8+8u+WWdtuB227W2eb7Ud2+ARm0ARZ23ydBFK/a4tjejj+czVQpnnOOL4yRGrz+kkUEPxrxplQEDVTFnZWu4erRXdThOhNJSbnwG7gewWJ8HKbdmeeH04I3G41/rn/Dd+zx0xepF0zeEZnbKuCSIINUs80o42YvG1XdG9jD7aPR+PjjSgMObguLqHgH+PutxZUPWavU2qBGa9yHZKYB/8KAgUWFRzNwjkeX5uBfb25Zcfq2MZx3E5TapXTToF/hQj3MwNphriqFCAp4bGrcO4NrD7s5z64aHJ2v73eRzrOvd0fTzm+lgfcw4XXcfmGK+6543hHzyAi4cDddmWI8fiO/VQ3YMfbGIvtMeP9xYneOSD0/roOHGxrqatYl0k48dWy3sVr2CPW5WndTKtsszBB3Ajqj8YefSydVZ4q5InZZZlSekV5XGQnY58NeCnKZ8esd0UhWUyhqBfQEgsiwH3qrhKvOTUghkeizIb61k8PmUd7k2TWAeB/IQHh1nJ9apTFHpVFuO4cpxqHTvTo77OprwovMopE+40RKF3XFXTaQIpsxNnvMXBIMUgKeIkc7KihGdVvD5iyeBVVYVZNf6VQj95MLJcr+NKX5+cyiuTivMs7qwHYO/jtNIhzWmMwqylx8fj2uPTsvJ4XGROlfEqGWQVL46l7hTThJ90HpfVGEujDgwq4xW0T9OpU1XHMQgaJ/DUK/ipqlbxGt6FXgxaTVGonyrwUJ4VRaInVZHpmbc+ghHh6qyz02mwHlc8qbKCryr8MxpfV8WaT0/QsR7wdZKgU2aZ/qoqs+nRG8N6Bff2KnCHhigcAJ1OZ9AZDGLRxo/O9R9eOtcGjMCRg/oh/Igb2WzJD/yyfNoZNEMhbtf/Le4tjSAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiCIO/IvwcfktnRtJUEAAAAASUVORK5CYII=' }} // Replace with your image URL
        style={styles.image}
      />
      <Text style={styles.description}>
        This app allows you to manage your shopping experience across various e-commerce platforms,
        compare prices, and keep track of your favorite products effortlessly!
      </Text>
      <View style={styles.buttonContainer}>
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});
