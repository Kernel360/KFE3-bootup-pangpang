import type { Meta, StoryObj } from '@storybook/react';
import { InputProps } from './input-types';
import Input from './Input';
import { InputSize, InputState, InputVariant } from './input-styles';

const meta: Meta<InputProps> = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Input 컴포넌트는 다양한 스타일과 상태를 지원하는 폼 입력 요소입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'ghost'] as InputVariant[],
      description: 'Input의 시각적 스타일 변형',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'] as InputSize[],
      description: 'Input의 크기',
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'error', 'success'] as InputState[],
      description: 'Input의 상태',
    },
    isError: {
      control: { type: 'boolean' },
      description: '에러 상태 (state보다 우선순위 높음)',
    },
    isSuccess: {
      control: { type: 'boolean' },
      description: '성공 상태 (state보다 우선순위 높음, isError보다 낮음)',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '비활성화 상태',
    },
    required: {
      control: { type: 'boolean' },
      description: '필수 입력 여부',
    },
    placeholder: {
      control: { type: 'text' },
      description: '플레이스홀더 텍스트',
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number'],
      description: 'Input 타입',
    },
    className: {
      control: { type: 'text' },
      description: 'Input 요소 추가 CSS 클래스',
    },
  },
  args: {
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    placeholder: '텍스트를 입력하세요',
  },
};

// 크기별 스토리
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="block text-sm font-medium mb-2">Small</label>
        <Input size="sm" placeholder="Small input" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">
          Medium (기본값)
        </label>
        <Input size="md" placeholder="Medium input" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Large</label>
        <Input size="lg" placeholder="Large input" />
      </div>
    </div>
  ),
};

// 변형별 스토리
export const Variants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="block text-sm font-medium mb-2">Default</label>
        <Input variant="default" placeholder="Default variant" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Filled</label>
        <Input variant="filled" placeholder="Filled variant" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Ghost</label>
        <Input variant="ghost" placeholder="Ghost variant" />
      </div>
    </div>
  ),
};

// 상태별 스토리
export const States: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="block text-sm font-medium mb-2">기본 상태</label>
        <Input placeholder="기본 상태" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2 text-red-600">
          에러 상태
        </label>
        <Input isError placeholder="에러 상태" />
        <p className="text-sm text-red-600 mt-1">에러 메시지입니다.</p>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2 text-green-600">
          성공 상태
        </label>
        <Input isSuccess placeholder="성공 상태" />
        <p className="text-sm text-green-600 mt-1">입력이 완료되었습니다.</p>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2 text-gray-400">
          비활성화
        </label>
        <Input
          disabled
          placeholder="비활성화된 입력"
          defaultValue="수정할 수 없음"
        />
      </div>
    </div>
  ),
};

// 다양한 타입
export const InputTypes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="block text-sm font-medium mb-2">텍스트</label>
        <Input type="text" placeholder="이름을 입력하세요" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">이메일</label>
        <Input type="email" placeholder="email@example.com" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">패스워드</label>
        <Input type="password" placeholder="비밀번호를 입력하세요" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">숫자</label>
        <Input type="number" placeholder="숫자를 입력하세요" />
      </div>
    </div>
  ),
};

// 필수 입력 필드
export const Required: Story = {
  args: {
    required: true,
    placeholder: '필수 입력 필드',
  },
  render: (args) => (
    <div className="w-80">
      <label className="block text-sm font-medium mb-2">
        이름 <span className="text-red-500">*</span>
      </label>
      <Input {...args} />
      <p className="text-sm text-gray-500 mt-1">필수 입력 항목입니다.</p>
    </div>
  ),
};

// 조합 예시
export const FormExample: Story = {
  render: () => (
    <form className="space-y-6 w-96 p-6 border rounded-lg bg-white">
      <h3 className="text-lg font-semibold mb-4">회원가입 폼</h3>

      <div>
        <label className="block text-sm font-medium mb-2">
          이름 <span className="text-red-500">*</span>
        </label>
        <Input required placeholder="이름을 입력하세요" size="md" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          이메일 <span className="text-red-500">*</span>
        </label>
        <Input
          type="email"
          required
          placeholder="email@example.com"
          variant="filled"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          비밀번호 <span className="text-red-500">*</span>
        </label>
        <Input
          type="password"
          required
          placeholder="8자 이상 입력하세요"
          isError
        />
        <p className="text-sm text-red-600 mt-1">
          비밀번호는 8자 이상이어야 합니다.
        </p>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        가입하기
      </button>
    </form>
  ),
};

// Playground - 모든 props를 테스트할 수 있는 스토리
export const Playground: Story = {
  args: {
    placeholder: '텍스트를 입력하세요',
    variant: 'default',
    size: 'md',
    state: 'default',
    type: 'text',
    disabled: false,
    required: false,
    isError: false,
    isSuccess: false,
  },
};
