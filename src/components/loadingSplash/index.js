import React, { useCallback } from 'react';
import { View, Modal } from 'react-native';
import Rive from 'rive-react-native';
import LottieView from 'lottie-react-native';

export default function SplashLoading({ modalVisible }) {
    return (
        <Modal
            animationType="slide"
            visible={modalVisible}
        >
            <View style={{ flex: 1, backgroundColor: '#5B9EA6' }}>
                <Rive
                    resourceName="splashspeed"
                    style={{ flex: 1 }}
                />
                <LottieView
                    source={require('../../assets/loading.json')}
                    autoPlay
                    loop
                    hardwareAccelerationAndroid={false}
                    speed={0.19}
                    style={{ top: 45 }}
                />
            </View>
        </Modal>
    );
}