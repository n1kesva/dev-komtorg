@extends('layouts.app')

@section('content')

<v-app light>
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                

                <div class="panel-body">
                    <form class="form-horizontal" method="POST" action="{{ route('register') }}">
                        {{ csrf_field() }}

                        <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                           

                            <div class="register.blade.php">
                                <v-text-field
                                  label="Name"
                                  name="name"
                                  value="{{ old('name') }}" 
                                  :counter="10"
                                  id="email"
                                  type="text"
                                  required autofocus
                                ></v-text-field>
                                
                                @if ($errors->has('name'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                            
                
                            <div class="">

                                <v-text-field
                                  label="Email"
                                  name="email"
                                  value="{{ old('email') }}" 
                                  :counter="10"
                                  id="email"
                                  type="text"
                                  required
                                ></v-text-field>
                                                              

                                @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                           

                            <v-layout row>
          
                                  <v-flex xs8>
                                    <v-text-field
                                      name="password"
                                      label="Enter your password"
                                      hint="At least 8 characters"
                                      min="8"
                                      value=""
                                      type="password"
                                      id="password"
                                      required
                                    ></v-text-field>
                                    @if ($errors->has('password'))
                                        <span class="help-block">
                                            <strong>{{ $errors->first('password') }}</strong>
                                        </span>
                                    @endif
                                  </v-flex>
                            </v-layout>
                            
                        </div>
        
                        <v-layout row>
          
                              <v-flex xs8>
                                <v-text-field
                                  name="password_confirmatio"
                                  label="Confirm your password"
                                  hint="At least 8 characters"
                                  min="8"
                                  value=""
                                  type="password"
                                   required
                                ></v-text-field>
                              </v-flex>
                        </v-layout>

                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-4">
                                <button type="submit" class="btn btn-primary">
                                    Register
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</v-app>

@endsection
