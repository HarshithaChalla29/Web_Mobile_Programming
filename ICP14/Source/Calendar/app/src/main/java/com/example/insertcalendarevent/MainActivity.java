// Created by Vijaya Yeruva on 11/21/2020

package com.example.insertcalendarevent;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.app.DatePickerDialog;
import android.content.Intent;
import android.os.Bundle;
import android.provider.CalendarContract;
import android.util.Log;
import android.view.Menu;
import android.view.View;
import android.widget.Button;
import android.widget.CalendarView;
import android.widget.DatePicker;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class MainActivity extends AppCompatActivity {
    CalendarView calview;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        calview = (CalendarView) findViewById(R.id.calendarView);
        calview.setOnDateChangeListener(new CalendarView.OnDateChangeListener() {
            @Override
            public void onSelectedDayChange(@NonNull CalendarView calendarView, int i, int i1, int i2) {
                Integer year = i;
                Integer month = i1+1;
                Integer day = i2;
                Log.d("Selected", String.valueOf(month) + "/" + String.valueOf(day) + "/" + String.valueOf(year));
                Button butinsert = (Button) findViewById(R.id.create_eventbut);
                butinsert.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        // Auto-generated method stub
                        insert(day, month, year);
                    }
                });
            }
        });

    }

    public void insert(Integer d, Integer m, Integer y) {

        Intent intent = new Intent(Intent.ACTION_INSERT, CalendarContract.Events.CONTENT_URI);
        // Add the calendar event details
        intent.putExtra(CalendarContract.Events.TITLE, "Launch!");
        intent.putExtra(CalendarContract.Events.DESCRIPTION,
                "Calendar Event");
        intent.putExtra(CalendarContract.Events.EVENT_LOCATION,
                "UMKC");
        Calendar startTime = Calendar.getInstance();
        startTime.set(y, m-1, d);
        intent.putExtra(CalendarContract.EXTRA_EVENT_BEGIN_TIME,
                startTime.getTimeInMillis());
        intent.putExtra(CalendarContract.EXTRA_EVENT_ALL_DAY, true);
        // Use the Calendar app to add the new event.
        startActivity(intent);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.main, menu);
        return true;
    }

}