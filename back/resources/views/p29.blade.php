<div>
    @include('footer')

    <div style="width: 117px; margin: auto;">
        <div style="width: 35px; height: 35px; border-radius: 50%; border: 2px solid #85B1F5; float: left;">
            <table>
                <tr>
                    <td style="width: 35px; height: 35px; text-align: center; font-family: montsersemibold;">{{ $total[0] }}</td>
                </tr>
            </table>
        </div>

        <div style="width: 35px; height: 35px; border-radius: 50%; border: 2px solid #FDC572; float: left;">
            <table>
                <tr>
                    <td style="width: 35px; height: 35px; text-align: center; font-family: montsersemibold;">{{ $total[2] }}</td>
                </tr>
            </table>
        </div>

        <div style="width: 35px; height: 35px; border-radius: 50%; border: 2px solid #F9892E; float: left;">
            <table>
                <tr>
                    <td style="width: 35px; height: 35px; text-align: center; font-family: montsersemibold;">{{ $total[1] }}</td>
                </tr>
            </table>
        </div>
    </div>

    <div style="margin-top: 15px;">
        <div style="width: 60%; float: left;">
            <div style="font-size: 12px; line-height: 22px; width: 85%; float: left;">
                @foreach($profListSix as $sixthListCareer)
                    {{ $sixthListCareer['career_description']['career'] }}<br>
                @endforeach
            </div>

            <div style="font-size: 12px; line-height: 22px; text-align: right;">
                @foreach($profListSix as $sixthListLevel)
                    {{ $sixthListLevel['level'] }}<br>
                @endforeach
            </div>
        </div>
    </div>

    <div style="margin-top: 120px;">
        @include('footer')
    </div>
</div>
