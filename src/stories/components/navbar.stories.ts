import { Meta, Story } from '@storybook/angular';
import { NavbarComponent } from '../../app/components/navbar/navbar.component';

export default {
  title: 's20p-navbar',
  component: NavbarComponent,
} as Meta; // To define component and display title

export const Primary: Story = () => ({
  props: { who: 'Primary' } // matches to @Input() who
});

export const Secondary: Story = () => ({
  props: { who: 'Secondary' }
});