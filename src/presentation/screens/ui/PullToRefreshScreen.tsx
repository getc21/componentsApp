import React, { useContext, useState } from 'react';
import {Title} from '../../components/ui/Title';
import {RefreshControl, ScrollView} from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalStyles } from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext';

export const PullToRefreshScreen = () => {

    const {colors} = useContext( ThemeContext);
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
                progressBackgroundColor={colors.cardBackground}
                tintColor={colors.primary}
                onRefresh={onRefresh}
            />
        }
        style={[ globalStyles.mainContainer, globalStyles.globalMargin]}
    >
        <Title text="PullToRefreshScreen" safe />
    </ScrollView>
  );
};
