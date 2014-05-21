require 'spec_helper'

describe 'user enters homepage' do
	it 'shows index about NYC' do
		visit rooth_path
		expect(page).to have_content('NYC')
	end
end