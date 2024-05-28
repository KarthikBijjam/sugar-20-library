import { Meta, Story } from '@storybook/angular';
import { ProductComponent } from '../../app/components/product/product.component';

export default {
  title: 's20p-product',
  component: ProductComponent,
} as Meta; // To define component and display title

export const Primary: Story = () => ({
  props: { who: 'Primary' } // matches to @Input() who
});

export const Secondary: Story = () => ({
  props: { who: 'Secondary' }
});