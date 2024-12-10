import React, { useState } from 'react';
import {Title} from '../../components/ui/Title';
import {RefreshControl, ScrollView} from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, globalStyles } from '../../../config/theme/theme';

export const PullToRefreshScreen = () => {

    const [isRefreshing, setIsrefreshing] = useState(false);
    const { top } = useSafeAreaInsets();


    const onRefresh = () => {
        setIsrefreshing(true);
        setTimeout(() => {
            setIsrefreshing(false);
        }, 2000);
    };
  return (
    <ScrollView
        refreshControl={
            <RefreshControl
                refreshing={isRefreshing}
                progressViewOffset={top}
                colors={[colors.primary, 'red', 'orange', 'green']}
                onRefresh={onRefresh}
            />
        }
        style={[ globalStyles.mainContainer, globalStyles.globalMargin]}
    >
        <Title text="PullToRefreshScreen" safe />
    </ScrollView>
  );
};
