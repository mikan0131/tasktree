import { Meta, StoryObj } from '@storybook/nextjs-vite'
import { SimpleButton } from '@/components/atoms/SimpleButton'
//import MDXDocument from './SimpleButton.stories.mdx'

/**
 * これはデザインがシンプルなボタンです<br>
 * かなり使うかも
 */
const meta: Meta<typeof SimpleButton> = {
    title: 'tasktree/Atoms/SimpleButton',
    component: SimpleButton,
    argTypes:{
        color: {
            control: 'color',
        },
        backgroundColor: {
            control: 'color'
        },
        children: {
            control: 'text'
        }
    }
    ,
    parameters: {
        docs: {
            //disable: true,
        }
    },
    tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>
/**
 * Primaryボタン
 * これでいろんなことができます
 */
export const Primary:Story = {
    args: {
        color: '#ffffff',
        backgroundColor: '#111111',
        children: 'Primary',
        border: 'none'
    },
};

/**
 * Dangerボタン
 * 危険なことをするときに使います
 */

export const Danger: Story = {
    args: {
        color: '#ffffff',
        backgroundColor: '#ff0000',
        children: 'Danger',
        border: '1px solid red'
    }
}