import React from 'react';
import { LabelList } from '../LabelList/LabelList';
import { KeywordList } from '../KeywordList/KeywordList';
import { LabelProps } from '@/types/label';

type ItemGroupProps = {
    isLabel: boolean;
    labels: LabelProps[];
    onLabelSelect: (label: number) => void;
    selectedLabels: number | null;
    keywordProps: {
        title: string;
        subTitle: string;
        keywordGroup: { content: string }[];
    };
    onKeywordSelect: (keyword: number) => void;
    selectedKeywords: number[];
};

export const ItemGroup: React.FC<ItemGroupProps> = ({
    isLabel,
    labels,
    onLabelSelect,
    selectedLabels,
    keywordProps,
    onKeywordSelect,
    selectedKeywords
}) => {
    return isLabel ? (
        <LabelList
            labels={labels}
            onLabelSelect={onLabelSelect}
            selectedLabels={selectedLabels}
        />
    ) : (
        <KeywordList
            title={keywordProps.title}
            subTitle={keywordProps.subTitle}
            keywordGroup={keywordProps.keywordGroup}
            onKeywordSelect={onKeywordSelect}
            selectedKeywords={selectedKeywords}
        />
    );
};