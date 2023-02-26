import React, { ChangeEvent } from 'react';
import { Category, CategoriesWrapper } from '../../styled/elements/Category';
import TextInput from '../../styled/elements/TextInput';

interface SearchProps {
	changeInput: (text: string) => void;
	categories: string[];
	toggleSelectCategory: (selected: string) => void;
	isSelected: (selected: string) => boolean;
}

const Search = ({
	changeInput,
	categories,
	toggleSelectCategory,
	isSelected,
}: SearchProps) => {
	const handleChange = (e: ChangeEvent) => {
		const target = e.target as HTMLInputElement;

		changeInput(target.value);
	};

	return (
		<div>
			<TextInput
				type="text"
				placeholder="Search content"
				onChange={handleChange}
			/>
			<CategoriesWrapper>
				{categories.map((category, index) => (
					<Category
						selected={isSelected(category)}
						key={index}
						onClick={() => toggleSelectCategory(category)}
					>
						{category}
					</Category>
				))}
			</CategoriesWrapper>
		</div>
	);
};

export default Search;
